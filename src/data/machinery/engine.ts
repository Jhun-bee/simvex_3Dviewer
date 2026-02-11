import { MachineryPart } from '../../types';

export const engineParts: MachineryPart[] = [
    // === Crankshaft (Ground) === 
    {
        name: 'Crankshaft',
        file: '/models/V4_Engine/Crankshaft.glb',
        material: 'Forged Steel',
        role: '왕복↔회전 변환 메인 크랭크축 (4기통)',
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        isGround: true,
        centerMesh: false, // CRITICAL: Use absolute exported origin to match cylinders
        explodeDirection: [0, 0, 0],
        color: '#8A8A8A'
    },

    // ====== Cylinder 1 ======
    { name: 'Connecting Rod #1', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '1번 커넥팅 로드', position: [15.2, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Rod Cap #1', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '1번 로드 캡', position: [15.2, -4.3, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Conrod Bolt #1a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '1번 볼트 (좌)', position: [15.2, -3.8, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Conrod Bolt #1b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '1번 볼트 (우)', position: [15.2, -3.8, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Piston #1', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '1번 피스톤', position: [15.2, 12, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4', centerMesh: false },
    { name: 'Piston Pin #1', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '1번 피스톤 핀', position: [19.3, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [-1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0', centerMesh: false },
    { name: 'Piston Ring #1-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '1번 1차 압축링', position: [15.2, 20, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #1-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '1번 2차 압축링', position: [15.2, 19, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #1-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '1번 오일링', position: [15.2, 18, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333', centerMesh: false },

    // ====== Cylinder 2 ======
    { name: 'Connecting Rod #2', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '2번 커넥팅 로드', position: [26.8, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Rod Cap #2', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '2번 로드 캡', position: [26.8, 4.5, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Conrod Bolt #2a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '2번 볼트 (좌)', position: [26.8, 5.0, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Conrod Bolt #2b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '2번 볼트 (우)', position: [26.8, 5.0, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Piston #2', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '2번 피스톤', position: [26.8, 21, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4', centerMesh: false },
    { name: 'Piston Pin #2', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '2번 피스톤 핀', position: [30.9, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [-1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0', centerMesh: false },
    { name: 'Piston Ring #2-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '2번 1차 압축링', position: [26.8, 29, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #2-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '2번 2차 압축링', position: [26.8, 28, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #2-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '2번 오일링', position: [26.8, 27, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333', centerMesh: false },

    // ====== Cylinder 3 ======
    { name: 'Connecting Rod #3', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '3번 커넥팅 로드', position: [38.4, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Rod Cap #3', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '3번 로드 캡', position: [38.4, 4.5, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Conrod Bolt #3a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '3번 볼트 (좌)', position: [38.4, 5.0, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Conrod Bolt #3b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '3번 볼트 (우)', position: [38.4, 5.0, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Piston #3', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '3번 피스톤', position: [38.4, 21, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4', centerMesh: false },
    { name: 'Piston Pin #3', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '3번 피스톤 핀', position: [42.5, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0', centerMesh: false },
    { name: 'Piston Ring #3-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '3번 1차 압축링', position: [38.4, 29, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #3-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '3번 2차 압축링', position: [38.4, 28, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #3-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '3번 오일링', position: [38.4, 27, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333', centerMesh: false },

    // ====== Cylinder 4 ======
    { name: 'Connecting Rod #4', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '4번 커넥팅 로드', position: [50.0, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Rod Cap #4', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '4번 로드 캡', position: [50.0, -4.3, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C', centerMesh: false },
    { name: 'Conrod Bolt #4a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '1번 볼트 (좌)', position: [50.0, -3.8, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Conrod Bolt #4b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '1번 볼트 (우)', position: [50.0, -3.8, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A', centerMesh: false },
    { name: 'Piston #4', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '4번 피스톤', position: [50.0, 12, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4', centerMesh: false },
    { name: 'Piston Pin #4', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '4번 피스톤 핀', position: [54.1, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0', centerMesh: false },
    { name: 'Piston Ring #4-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '4번 1차 압축링', position: [50.0, 20, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #4-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '4번 2차 압축링', position: [50.0, 19, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A', centerMesh: false },
    { name: 'Piston Ring #4-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '4번 오일링', position: [50.0, 18, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333', centerMesh: false },
];
