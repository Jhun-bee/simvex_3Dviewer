import { MachineryPart } from '../../types';

export const robotGripperParts: MachineryPart[] = [
    { name: 'Base Plate', file: '/models/Robot Gripper/Base Plate.glb', material: 'Aluminum', role: '그리퍼 베이스', position: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0] },
    { name: 'Mounting bracket', file: '/models/Robot Gripper/Base Mounting bracket.glb', material: 'Aluminum', role: '마운팅 브래킷', position: [0, 15, 0], explodeDirection: [0, 1, 0] },
    { name: 'Left Jaw', file: '/models/Robot Gripper/Gripper.glb', material: 'Aluminum', role: '왼쪽 집게 조', position: [-20, 30, 0], explodeDirection: [-1, 1, 0] },
    { name: 'Right Jaw', file: '/models/Robot Gripper/Gripper.glb', material: 'Aluminum', role: '오른쪽 집게 조', position: [20, 30, 0], explodeDirection: [1, 1, 0] },
];
