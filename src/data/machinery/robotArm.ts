import { MachineryPart } from '../../types';

export const robotArmParts: MachineryPart[] = [
    { name: 'Base', file: '/models/Robot Arm/base.glb', material: 'Aluminum', role: '로봇 베이스', position: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0] },
    { name: 'Part 2 (Shoulder)', file: '/models/Robot Arm/Part2.glb', material: 'Aluminum', role: '1번 관절 링크', position: [0, 14.5, 6.5], rotation: [0, 0, 0], explodeDirection: [0, 1, 0], explodeDistance: 30 },
    // 🎯 Micro-adjust Part 3 and Lift by FULL Base height (8.2)
    { name: 'Part 3 (Arm Link 1)', file: '/models/Robot Arm/Part3.glb', material: 'Aluminum', role: '상부 암 링크', position: [-3.4, 30.5, 3.5], rotation: [2.35, 0, 1.57], explodeDirection: [0, 1, 0.5], explodeDistance: 60 },
    { name: 'Part 4 (Arm Link 2)', file: '/models/Robot Arm/Part4.glb', material: 'Aluminum', role: '하부 암 링크', position: [2.6, 47.2, 0], rotation: [-0.087, 0, 0], explodeDirection: [0, 1, -0.5], explodeDistance: 90 },
    { name: 'Part 5 (Joint Link 3)', file: '/models/Robot Arm/Part5.glb', material: 'Aluminum', role: '중간 관절 링크', position: [1.6, 51, 21], rotation: [-0.087, 0, 0], explodeDirection: [0, 1, 0.5], explodeDistance: 120 },
    { name: 'Part 6 (Joint Link 4)', file: '/models/Robot Arm/Part6.glb', material: 'Aluminum', role: '전방 관절 링크', position: [1.6, 48, 29], rotation: [-0.698, 0, 0], explodeDirection: [0, 1, 0.8], explodeDistance: 150 },
    { name: 'Part 7 (Joint Link 5)', file: '/models/Robot Arm/Part7.glb', material: 'Aluminum', role: '손목 관절 링크', position: [1.6, 41, 35], rotation: [0.887, 0, 0], explodeDirection: [0, 1, 1], explodeDistance: 180 },
    { name: 'Part 8 (Hand) - Left', file: '/models/Robot Arm/Part8.glb', material: 'Aluminum', role: '그리퍼 L', position: [-1.5, 36.1, 39.1], rotation: [-0.698, 0, -0.3], explodeDirection: [-1, 1, 1], explodeDistance: 220 },
    { name: 'Part 8 (Hand) - Right', file: '/models/Robot Arm/Part8.glb', material: 'Aluminum', role: '그리퍼 R', position: [4.5, 36.1, 39.1], rotation: [-0.698, 3.14, -0.3], explodeDirection: [1, 1, 1], explodeDistance: 220 },
];
