import { useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
// @ts-ignore
import { Machinery } from '../../types';

export function useModelLoader(machinery: Machinery) {
    const [models, setModels] = useState<Map<string, THREE.Group>>(new Map());
    const [originalPositions, setOriginalPositions] = useState<Map<string, THREE.Vector3>>(new Map());
    const [error, setError] = useState<string | null>(null);

    // Prepare URLs
    const modelPaths = useMemo(() => {
        return machinery.parts.map((part: any) => {
            // Encode URL to handle spaces in filenames
            // encodeURI encodes spaces to %20 but leaves slashes alone.
            return encodeURI(part.file);
        });
    }, [machinery]);

    // Load models using Drei's useGLTF
    // This hook will suspend the component until loaded
    const gltfs = useGLTF(modelPaths);

    useEffect(() => {
        if (!gltfs) return;

        const loadedModels = new Map<string, THREE.Group>();
        const positions = new Map<string, THREE.Vector3>();

        try {
            // gltfs is an array of GLTF results corresponding to modelPaths
            // If only one model, useGLTF might return single object, but we passed array so valid.
            const results = Array.isArray(gltfs) ? gltfs : [gltfs];

            results.forEach((gltf, index) => {
                const part = machinery.parts[index];
                const model = gltf.scene.clone(); // Clone to allow re-use if needed

                // Enable shadows
                model.traverse((child: any) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        if (child.material) {
                            child.material.envMapIntensity = 1;
                            child.material.needsUpdate = true;
                        }
                    }
                });

                model.userData = { partName: part.name };

                // 🎯 Hardcode scale to 100 for global consistency with machineData coordinates
                const scale = 100;
                model.scale.set(scale, scale, scale);

                // Enable shadows and apply high-quality materials
                model.traverse((child: any) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;

                        // Create a NEW high-quality material
                        const material = new THREE.MeshStandardMaterial({
                            color: part.color ? new THREE.Color(part.color) : (child.material as THREE.MeshStandardMaterial).color,
                            metalness: 0.85,
                            roughness: 0.25,
                            envMapIntensity: 1.0,
                        });

                        child.material = material;
                        child.material.needsUpdate = true;
                    }
                });

                // Apply initial rotation from data if available
                if (part.rotation) {
                    model.rotation.set(part.rotation[0], part.rotation[1], part.rotation[2]);
                }

                // 🎯 1. Calculate Bounding Box after scaling but BEFORE positioning
                model.updateMatrixWorld(true);
                const box = new THREE.Box3().setFromObject(model);
                const center = new THREE.Vector3(0, 0, 0);
                if (!box.isEmpty()) {
                    box.getCenter(center);
                }

                // 🎯 2. Centering: Mesh를 그룹의 로컬 원점[0,0,0]으로 강제 이동
                // (모델링 툴에서의 좌표 오프셋을 상쇄하여 회전 축을 중앙으로 맞춤)
                // Default to TRUE for Robot Arm compatibility, but can be disabled via data
                const shouldCenter = part.centerMesh !== false;
                if (shouldCenter) {
                    model.position.set(-center.x, -center.y, -center.z);
                } else {
                    // if centering is off, use original exported offsets or assemblyOffset
                    const assemblyOffset = part.assemblyOffset || [0, 0, 0];
                    model.position.set(assemblyOffset[0], assemblyOffset[1], assemblyOffset[2]);
                }

                // 🎯 3. Group Positioning: 그룹을 월드 좌표(machineryData)에 배치
                // part.position이 있으면 그것을 쓰고, 없으면 원래의 center를 사용
                const groupPos = part.position ? new THREE.Vector3(...part.position) : center;

                const group = new THREE.Group();
                group.add(model);

                loadedModels.set(part.name, group);
                positions.set(part.name, groupPos);
            });

            setModels(loadedModels);
            setOriginalPositions(positions);
        } catch (err: any) {
            console.error('❌ Error processing loaded models:', err);
            setError(err.message);
        }

    }, [gltfs, machinery]);

    return {
        models,
        originalPositions,
        isLoading: false, // Suspense handles loading state
        error
    };
}
