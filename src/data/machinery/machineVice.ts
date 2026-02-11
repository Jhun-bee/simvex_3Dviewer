import { MachineryPart } from '../../types';

export const machineViceParts: MachineryPart[] = [
    { name: 'Base Plate', file: '/models/Machine Vice/Part8-grundplatte.glb', material: 'Wood/Cast Iron', role: '기초 베이스 판', position: [0, 0, 0], rotation: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0], color: '#8B4513' },
    { name: 'Guide Body', file: '/models/Machine Vice/Part1 Fuhrung.glb', material: 'Cast Iron', role: '이동조 안내 가이드', position: [2.25, 1, 3.5], rotation: [0, 0, 0], explodeDirection: [0, 1, 0], explodeDistance: 15, color: '#404040' },
    { name: 'Main Body', file: '/models/Machine Vice/Part1.glb', material: 'Cast Iron', role: '바이스 본체 블록', position: [5.5, 1, 0.5], rotation: [0, 0, 0], explodeDirection: [0, 1, 0], explodeDistance: 10, color: '#505050' },
    { name: 'Fixed Jaw', file: '/models/Machine Vice/Part2 Feste Backe.glb', material: 'Steel', role: '고정 조 (움직이지 않는 턱)', position: [5.5, 1, 3.5], rotation: [0, 0, 0], explodeDirection: [0, 0, 1], explodeDistance: 20, color: '#2D2D2D' },
    { name: 'Spindle Socket', file: '/models/Machine Vice/Part4 spindelsockel.glb', material: 'Cast Iron', role: '스핀들 지지대/소켓', position: [7.5, 1, -3], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 15, color: '#3D3D3D' },
    { name: 'Guide Rail L', file: '/models/Machine Vice/Part6-fuhrungschiene.glb', material: 'Steel', role: '좌측 슬라이드 가이드 레일', position: [2.5, 1, 1.5], rotation: [0, 0, 0], explodeDirection: [-1, 0, 0], explodeDistance: 20, color: '#B0B0B0' },
    { name: 'Guide Rail R', file: '/models/Machine Vice/Part6-fuhrungschiene.glb', material: 'Steel', role: '우측 슬라이드 가이드 레일', position: [8.5, 1, 1.5], rotation: [0, 0, 0], explodeDirection: [1, 0, 0], explodeDistance: 20, color: '#B0B0B0' },
    { name: 'Trapez Spindle', file: '/models/Machine Vice/Part7-TrapezSpindel.glb', material: 'Steel', role: '이동조 구동 사다리꼴 나사(스핀들)', position: [9.25, 3.75, -2], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 30, color: '#DAA520' },
    { name: 'Movable Jaw', file: '/models/Machine Vice/Part3-lose backe.glb', material: 'Steel', role: '이동 조 (스핀들로 이동하는 턱)', position: [5.5, 1.5, -2], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 25, color: '#2D2D2D' },
    { name: 'Clamping Jaw (Fixed)', file: '/models/Machine Vice/Part5-Spannbacke.glb', material: 'Hardened Steel', role: '고정조 표면 클램핑 판', position: [5.5, 2, 4.8], rotation: [0, 0, 0], explodeDirection: [0, 0, 1], explodeDistance: 12, color: '#1A1A1A' },
    { name: 'Clamping Jaw (Movable)', file: '/models/Machine Vice/Part5-Spannbacke.glb', material: 'Hardened Steel', role: '이동조 표면 클램핑 판', position: [5.5, 2, -4.5], rotation: [0, Math.PI, 0], explodeDirection: [0, 0, -1], explodeDistance: 12, color: '#1A1A1A' },
    { name: 'Pressure Sleeve', file: '/models/Machine Vice/Part9-Druckhulse.glb', material: 'Steel', role: '스핀들 핸들 압력 슬리브', position: [9.25, 3.75, -15], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 15, color: '#FFD700' },
];
