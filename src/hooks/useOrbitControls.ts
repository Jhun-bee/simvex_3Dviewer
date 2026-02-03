import { useEffect } from 'react';
import { useViewerStore } from '../stores/viewerStore';

export function useOrbitControls() {
    const { triggerCameraReset } = useViewerStore();

    useEffect(() => {
        console.log('✅ [useOrbitControls] 카메라 컨트롤 초기화');

        return () => {
            console.log('🧹 [useOrbitControls] 정리 완료');
        };
    }, []);

    return {
        controlsConfig: {
            enableDamping: true,
            dampingFactor: 0.05, // Smooth damping
            minDistance: 10,
            maxDistance: 500,
            minPolarAngle: 0,
            maxPolarAngle: Math.PI / 1.8, // Prevent going too far under the floor
            enablePan: true,
            panSpeed: 1.2,
            rotateSpeed: 1.0,
            zoomSpeed: 1.2,
            autoRotate: false,
            autoRotateSpeed: 2.0
        },
        // 컨트롤 함수들
        resetCamera: () => {
            console.log('🔄 카메라 리셋 호출');
            triggerCameraReset();
        },
        focusOnPart: (partName: string) => {
            console.log(`🎯 부품에 포커스: ${partName}`);
            // TODO: Implement logic to update camera target based on part position
        }
    };
}
