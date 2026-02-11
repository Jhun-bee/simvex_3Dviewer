import { MachineryPart } from '../../types';

export const suspensionParts: MachineryPart[] = [
    {
        name: 'BASE',
        file: '/models/Suspension/BASE.glb',
        material: 'Steel',
        role: '서스펜션 하단 고정부',
        position: [0, 0, 0],
        isGround: true,
        centerMesh: false,
        explodeDirection: [0, 0, 0]
    },
    {
        name: 'SPRING',
        file: '/models/Suspension/SPRING.glb',
        material: 'Spring Steel',
        role: '충격 흡수용 코일 스프링',
        position: [0, 0, 0],
        centerMesh: false,
        explodeDirection: [0, 1, 0],
        explodeDistance: 30.0
    },
    {
        name: 'NUT',
        file: '/models/Suspension/NUT.glb',
        material: 'Steel',
        role: '스프링 상단 고정 너트',
        position: [0, 9.9, 0], // User requested: raise by half of what was lowered (6.6 + 3.3 = 9.9)
        centerMesh: false,
        explodeDirection: [0, 1, 0],
        explodeDistance: 60.2
    },
    {
        name: 'ROD',
        file: '/models/Suspension/ROD.glb',
        material: 'Steel',
        role: '댐퍼 로드 및 상단 체결부',
        position: [0, 9.9, 0], // Aligned with NUT
        centerMesh: false,
        explodeDirection: [0, 1, 0],
        explodeDistance: 95.0
    },
];
