import { Machinery } from '../types';

export const machineryData: Record<string, Machinery> = {
  Suspension: {
    id: 'Suspension',
    name: '서스펜션',
    description: '자동차의 충격 흡수 장치입니다.',
    theory: `
**작동 원리:**
스프링과 댐퍼의 조합으로 노면 충격 흡수

**주요 기능:**
- 승차감 향상
- 차체 안정성 확보
`,
    thumbnail: '/models/Suspension/서스펜션 조립도.png',
    parts: [
      {
        name: 'BASE',
        file: '/models/Suspension/BASE.glb',
        material: 'Steel',
        role: '서스펜션 하단 고정부',
        position: [0, 0, 0],
        isGround: true,
        explodeDirection: [0, 0, 0]
      },
      {
        name: 'SPRING',
        file: '/models/Suspension/SPRING.glb',
        material: 'Spring Steel',
        role: '충격 흡수용 코일 스프링',
        position: [0, 0, 0], // v0.5.0 Confirmed
        explodeDirection: [0, 1, 0],
        explodeDistance: 30.0
      },
      {
        name: 'NUT',
        file: '/models/Suspension/NUT.glb',
        material: 'Steel',
        role: '스프링 상단 고정 너트',
        position: [0, 19.8, 0], // v0.5.0 Confirmed
        explodeDirection: [0, 1, 0],
        explodeDistance: 60.2 // Final Y: 80.0 (Gap to Spring Top[50]: 30)
      },
      {
        name: 'ROD',
        file: '/models/Suspension/ROD.glb',
        material: 'Steel',
        role: '댐퍼 로드 및 상단 체결부',
        position: [0, 20.0, 0], // v0.5.0 Confirmed
        explodeDirection: [0, 1, 0],
        explodeDistance: 95.0 // Final Y: 115.0 (Gap to Nut Top[85]: 30)
      },
    ],
  },
  'Robot Arm': {
    id: 'Robot Arm',
    name: '로봇 팔',
    description: '산업용 로봇 팔입니다.',
    theory: `
**작동 원리:**
여러 관절(joint)의 회전/이동으로 작업 수행
`,
    thumbnail: '/models/Robot Arm/로봇팔 조립도.png',
    parts: [
      { name: 'Base', file: '/models/Robot Arm/base.glb', material: 'Aluminum', role: '로봇 베이스', position: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0] },
      { name: 'Part 2 (Shoulder)', file: '/models/Robot Arm/Part2.glb', material: 'Aluminum', role: '1번 관절 링크', position: [0, 4.1, 0], rotation: [0, 0, 0], explodeDirection: [0, 1, 0], explodeDistance: 30 },
      { name: 'Part 3 (Arm Link 1)', file: '/models/Robot Arm/Part3.glb', material: 'Aluminum', role: '상부 암 링크', position: [-1.08, 13, 8.5], rotation: [2.35, 0, 1.57], explodeDirection: [0, 1, 0.5], explodeDistance: 60 },
      { name: 'Part 4 (Arm Link 2)', file: '/models/Robot Arm/Part4.glb', material: 'Aluminum', role: '하부 암 링크', position: [1.6, 28.0, -7.4], rotation: [-0.087, 0, 0], explodeDirection: [0, 1, -0.5], explodeDistance: 90 },
      { name: 'Part 5 (Joint Link 3)', file: '/models/Robot Arm/Part5.glb', material: 'Aluminum', role: '중간 관절 링크', position: [1.6, 29.3, 7.9], rotation: [-0.087, 0, 0], explodeDirection: [0, 1, 0.5], explodeDistance: 120 },
      { name: 'Part 6 (Joint Link 4)', file: '/models/Robot Arm/Part6.glb', material: 'Aluminum', role: '전방 관절 링크', position: [1.6, 28, 15.0], rotation: [-0.698, 0, 0], explodeDirection: [0, 1, 0.8], explodeDistance: 150 },
      { name: 'Part 7 (Joint Link 5)', file: '/models/Robot Arm/Part7.glb', material: 'Aluminum', role: '손목 관절 링크', position: [1.6, 26, 16.7], rotation: [0.887, 0, 0], explodeDirection: [0, 1, 1], explodeDistance: 180 },
      { name: 'Part 8 (Hand) - Left', file: '/models/Robot Arm/Part8.glb', material: 'Aluminum', role: '그리퍼 L', position: [0, 21.7, 19.6], rotation: [-0.698, 0, -0.3], explodeDirection: [-1, 1, 1], explodeDistance: 220 },
      { name: 'Part 8 (Hand) - Right', file: '/models/Robot Arm/Part8.glb', material: 'Aluminum', role: '그리퍼 R', position: [3.2, 22.4, 20.4], rotation: [-0.698, 3.14, -0.3], explodeDirection: [1, 1, 1], explodeDistance: 220 },
    ],
  },
  V4_Engine: {
    id: 'V4_Engine',
    name: 'V4 실린더 엔진',
    description: '내연기관의 핵심인 4기통 V형 엔진입니다. (시연용 1기통 정밀 모형)',
    theory: `
**작동 원리:**
1. 흡입 -> 2. 압축 -> 3. 폭발 -> 4. 배기

**주요 부품:**
- Piston: 연소 압력으로 왕복 운동
- Crankshaft: 직선 운동을 회전 운동으로 변환
- Connecting Rod: 피스톤과 크랭크 연결
`,
    thumbnail: '/models/V4_Engine/V4실린더 엔진 조립도.png',
    preferredScale: 60,
    parts: [
      // === Crankshaft (Ground) === GLB: 58.9×16×14.4, Y: -8 to 8
      { name: 'Crankshaft', file: '/models/V4_Engine/Crankshaft.glb', material: 'Forged Steel', role: '왕복↔회전 변환 메인 크랭크축 (4기통)', position: [0, 0, 0], rotation: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0], color: '#8A8A8A' },

      // ====== Cylinder 1 — Phase2: 로드/캡/피스톤/링은 delay=0.35, Phase1: 핀/볼트는 즉시(speed=2.5) ======
      { name: 'Connecting Rod #1', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '1번 커넥팅 로드', position: [15.9, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Rod Cap #1', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '1번 로드 캡', position: [15.9, -4.3, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Conrod Bolt #1a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '1번 볼트 (좌)', position: [15.9, -1.6, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Conrod Bolt #1b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '1번 볼트 (우)', position: [15.9, -1.6, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Piston #1', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '1번 피스톤', position: [15.9, 12, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4' },
      { name: 'Piston Pin #1', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '1번 피스톤 핀', position: [20, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [-1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0' },
      { name: 'Piston Ring #1-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '1번 1차 압축링', position: [15.9, 20, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #1-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '1번 2차 압축링', position: [15.9, 19, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #1-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '1번 오일링', position: [15.9, 18, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333' },

      // ====== Cylinder 2 ======
      { name: 'Connecting Rod #2', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '2번 커넥팅 로드', position: [27.5, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Rod Cap #2', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '2번 로드 캡', position: [27.5, 4.5, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Conrod Bolt #2a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '2번 볼트 (좌)', position: [27.5, 7.4, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Conrod Bolt #2b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '2번 볼트 (우)', position: [27.5, 7.4, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Piston #2', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '2번 피스톤', position: [27.5, 21, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4' },
      { name: 'Piston Pin #2', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '2번 피스톤 핀', position: [31.6, 21.7, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [-1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0' },
      { name: 'Piston Ring #2-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '2번 1차 압축링', position: [27.5, 29, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #2-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '2번 2차 압축링', position: [27.5, 28, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #2-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '2번 오일링', position: [27.5, 27, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333' },

      // ====== Cylinder 3 ======
      { name: 'Connecting Rod #3', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '3번 커넥팅 로드', position: [39.1, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Rod Cap #3', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '3번 로드 캡', position: [39.1, 4.5, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Conrod Bolt #3a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '3번 볼트 (좌)', position: [39.1, 7.4, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Conrod Bolt #3b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '3번 볼트 (우)', position: [39.1, 7.4, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Piston #3', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '3번 피스톤', position: [39.1, 21, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4' },
      { name: 'Piston Pin #3', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '3번 피스톤 핀', position: [43.2, 24, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0' },
      { name: 'Piston Ring #3-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '3번 1차 압축링', position: [39.1, 29, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #3-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '3번 2차 압축링', position: [39.1, 28, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #3-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '3번 오일링', position: [39.1, 27, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333' },

      // ====== Cylinder 4 ======
      { name: 'Connecting Rod #4', file: '/models/V4_Engine/Connecting Rod.glb', material: 'Forged Steel', role: '4번 커넥팅 로드', position: [50.7, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 38, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Rod Cap #4', file: '/models/V4_Engine/Connecting Rod Cap.glb', material: 'Forged Steel', role: '4번 로드 캡', position: [50.7, -4.3, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 25, explodeDelay: 0.11, color: '#8C8C8C' },
      { name: 'Conrod Bolt #4a', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '4번 볼트 (좌)', position: [50.7, -1.6, -3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Conrod Bolt #4b', file: '/models/V4_Engine/Conrod Bolt.glb', material: 'High-Tensile Steel', role: '4번 볼트 (우)', position: [50.7, -1.6, 3.5], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, -1, 0], explodeDistance: 44, explodeSpeed: 2.5, color: '#2A2A2A' },
      { name: 'Piston #4', file: '/models/V4_Engine/Piston.glb', material: 'Aluminum Alloy', role: '4번 피스톤', position: [50.7, 12, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 63, explodeDelay: 0.11, color: '#D4D4D4' },
      { name: 'Piston Pin #4', file: '/models/V4_Engine/Piston Pin.glb', material: 'Case-Hardened Steel', role: '4번 피스톤 핀', position: [54.7, 15, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [1, 0, 0], explodeDistance: 63, explodeSpeed: 2.5, color: '#B0B0B0' },
      { name: 'Piston Ring #4-1', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '4번 1차 압축링', position: [50.7, 20, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 88, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #4-2', file: '/models/V4_Engine/Piston Ring.glb', material: 'Cast Iron', role: '4번 2차 압축링', position: [50.7, 19, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 94, explodeDelay: 0.11, color: '#1A1A1A' },
      { name: 'Piston Ring #4-3', file: '/models/V4_Engine/Piston Ring.glb', material: 'Steel', role: '4번 오일링', position: [50.7, 18, 0], rotation: [0, Math.PI / 2, 0], explodeDirection: [0, 1, 0], explodeDistance: 100, explodeDelay: 0.11, color: '#333333' },
    ],
  },
  Drone: {
    id: 'Drone',
    name: '쿼드콥터 드론',
    description: '4개의 로터를 이용해 비행하는 드론 시스템입니다.',
    theory: `
**작동 원리:**
4개의 로터를 독립적으로 제어하여 추력과 토크의 균형을 맞춤으로써 비행합니다.
- **수직 상승/하강:** 4개 모터의 속도를 동시에 조절
- **회전 (Yaw):** 대각선 방향 모터 쌍의 속도 차이 이용
- **이동 (Pitch/Roll):** 앞뒤 또는 좌우 모터 쌍의 추력 불균형 생성

**주요 부품:**
- **Main Frame:** 기체의 골격이며 모든 부품이 장착되는 기준점입니다.
- **Arm Gear & Gearing:** 모터의 회전력을 프로펠러로 전달합니다.
- **Impeller Blade:** 회전을 통해 공기를 아래로 밀어내어 양력을 발생시킵니다.
- **Landing Gear (Leg):** 이착륙 시 충격을 흡수하고 본체를 보호합니다.
`,
    thumbnail: '/models/Drone/조립도1.png',
    parts: [
      {
        name: 'Main Frame',
        file: '/models/Drone/Main frame.glb',
        material: 'Carbon Fiber',
        role: '기체 본체 프레임',
        position: [0, 0, 0],
        isGround: true,
        explodeDirection: [0, 0, 0],
      },
      {
        name: 'Main Frame Mirror',
        file: '/models/Drone/Main frame_MIR.glb',
        material: 'Carbon Fiber',
        role: '기체 대칭 프레임',
        position: [0, 0, 0],
        explodeDirection: [0, 0, 0],
        constraint: { type: 'Fixed', offset: [0, 0, 0] },
      },
      {
        name: 'Landing Gear L',
        file: '/models/Drone/Leg.glb',
        material: 'Plastic',
        role: '좌측 착륙용 레그',
        position: [0, 0, 0],
        explodeDirection: [-0.5, -1, 0],
        explodeDistance: 40,
        constraint: { type: 'StackedOn', parentPart: 'Main Frame', offset: [-10, -8, 0] },
      },
      {
        name: 'Landing Gear R',
        file: '/models/Drone/Leg.glb',
        material: 'Plastic',
        role: '우측 착륙용 레그',
        position: [0, 0, 0],
        explodeDirection: [0.5, -1, 0],
        explodeDistance: 40,
        constraint: { type: 'StackedOn', parentPart: 'Main Frame', offset: [10, -8, 0] },
      },
      {
        name: 'Arm Gear FR',
        file: '/models/Drone/Arm gear.glb',
        material: 'Metal',
        role: '전방 우측 암 기어',
        position: [0, 0, 0],
        explodeDirection: [1, 0, 1],
        explodeDistance: 50,
        constraint: { type: 'RadialAroundCenter', centerPart: 'Main Frame', radius: 35, angle: 45, offset: [0, 2, 0] },
      },
      {
        name: 'Propeller FR',
        file: '/models/Drone/Impellar Blade.glb',
        material: 'Plastic',
        role: '전방 우측 프로펠러',
        position: [0, 0, 0],
        explodeDirection: [1, 1, 1],
        explodeDistance: 80,
        constraint: { type: 'StackedOn', parentPart: 'Arm Gear FR', offset: [0, 8, 0] },
      },
      {
        name: 'Screw FR',
        file: '/models/Drone/Screw.glb',
        material: 'Steel',
        role: '프로펠러 고정 볼트',
        position: [0, 0, 0],
        explodeDirection: [1, 1.5, 1],
        explodeDistance: 100,
        constraint: { type: 'Threaded', threadedOn: 'Arm Gear FR', threadDepth: 0.9, offset: [0, 2, 0] },
      },
      {
        name: 'Arm Gear FL',
        file: '/models/Drone/Arm gear.glb',
        material: 'Metal',
        role: '전방 좌측 암 기어',
        position: [0, 0, 0],
        explodeDirection: [-1, 0, 1],
        explodeDistance: 50,
        constraint: { type: 'RadialAroundCenter', centerPart: 'Main Frame', radius: 35, angle: 135, offset: [0, 2, 0] },
      },
      {
        name: 'Propeller FL',
        file: '/models/Drone/Impellar Blade.glb',
        material: 'Plastic',
        role: '전방 좌측 프로펠러',
        position: [0, 0, 0],
        explodeDirection: [-1, 1, 1],
        explodeDistance: 80,
        constraint: { type: 'StackedOn', parentPart: 'Arm Gear FL', offset: [0, 8, 0] },
      },
      {
        name: 'Arm Gear RR',
        file: '/models/Drone/Arm gear.glb',
        material: 'Metal',
        role: '후방 우측 암 기어',
        position: [0, 0, 0],
        explodeDirection: [1, 0, -1],
        explodeDistance: 50,
        constraint: { type: 'RadialAroundCenter', centerPart: 'Main Frame', radius: 35, angle: 315, offset: [0, 2, 0] },
      },
      {
        name: 'Propeller RR',
        file: '/models/Drone/Impellar Blade.glb',
        material: 'Plastic',
        role: '후방 우측 프로펠러',
        position: [0, 0, 0],
        explodeDirection: [1, 1, -1],
        explodeDistance: 80,
        constraint: { type: 'StackedOn', parentPart: 'Arm Gear RR', offset: [0, 8, 0] },
      },
      {
        name: 'Arm Gear RL',
        file: '/models/Drone/Arm gear.glb',
        material: 'Metal',
        role: '후방 좌측 암 기어',
        position: [0, 0, 0],
        explodeDirection: [-1, 0, -1],
        explodeDistance: 50,
        constraint: { type: 'RadialAroundCenter', centerPart: 'Main Frame', radius: 35, angle: 225, offset: [0, 2, 0] },
      },
      {
        name: 'Propeller RL',
        file: '/models/Drone/Impellar Blade.glb',
        material: 'Plastic',
        role: '후방 좌측 프로펠러',
        position: [0, 0, 0],
        explodeDirection: [-1, 1, -1],
        explodeDistance: 80,
        constraint: { type: 'StackedOn', parentPart: 'Arm Gear RL', offset: [0, 8, 0] },
      },
    ],
  },
  'Leaf Spring': {
    id: 'Leaf Spring',
    name: '판 스프링',
    description: '여러 겹의 탄성이 있는 강판을 겹쳐 만든 충격 흡수 장치입니다.',
    theory: `
**작동 원리:**
강철판이 굽어질 때 발생하는 복원력을 이용해 충격을 흡수합니다. 
여러 겹의 판을 겹침으로써 마찰에 의한 감쇠 효과와 높은 하중을 견딜 수 있는 능력을 제공합니다.

**주요 기능:**
- **하중 지지:** 무거운 차체와 적재물의 무게를 분산하여 지지
- **충격 완화:** 노면의 불규칙한 충격을 흡수하여 승차감 및 안정성 확보
- **자기 감쇠:** 판들 사이의 마찰이 진동을 서서히 멈추게 함

**주요 부품:**
- **Leaf Layer:** 주된 양력을 발생하는 강판 레이어
- **Clamp:** 여러 겹의 레이어를 하나로 묶어 고정하는 장치
- **Support & Rubber:** 차체와 스프링을 연결하고 소음/진동을 차단하는 부싱류
`,
    thumbnail: '/models/Leaf Spring/판스프링 조립도.png',
    preferredScale: 80,
    parts: [
      {
        name: 'Main Leaf Layer',
        file: '/models/Leaf Spring/Leaf-Layer.glb',
        material: 'Spring Steel',
        role: '메인 탄성 판',
        position: [0, 0, 0],
        isGround: true,
        explodeDirection: [0, 0, 0],
        color: '#4A7C59',  // Forest green – main spring steel plate
      },
      {
        name: 'Center Clamp',
        file: '/models/Leaf Spring/Clamp-Center.glb',
        material: 'Steel',
        role: '중앙 고정 클램프',
        position: [0, 0, 0],
        explodeDirection: [0, 1, 0],
        explodeDistance: 40,
        constraint: { type: 'StackedOn', parentPart: 'Main Leaf Layer', offset: [0, 5, 0] },
        color: '#D4A030',  // Amber – center clamp
      },
      {
        name: 'Primary Clamp',
        file: '/models/Leaf Spring/Clamp-Primary.glb',
        material: 'Steel',
        role: '측면 주 클램프',
        position: [0, 0, 0],
        explodeDirection: [0, 1, 0],
        explodeDistance: 60,
        constraint: { type: 'StackedOn', parentPart: 'Main Leaf Layer', offset: [-100, 2, 0] },
        color: '#C47B2B',  // Burnt orange – primary clamp
      },
      {
        name: 'Secondary Clamp',
        file: '/models/Leaf Spring/Clamp-Secondary.glb',
        material: 'Steel',
        role: '측면 보조 클램프',
        position: [0, 0, 0],
        explodeDirection: [0, 1, 0],
        explodeDistance: 80,
        constraint: { type: 'StackedOn', parentPart: 'Main Leaf Layer', offset: [100, 2, 0] },
        color: '#E8943A',  // Orange – secondary clamp
      },
      {
        name: 'Main Support',
        file: '/models/Leaf Spring/Support.glb',
        material: 'Steel',
        role: '메인 연결 서포터',
        position: [0, 0, 0],
        explodeDirection: [0, -1, 0],
        explodeDistance: 40,
        constraint: { type: 'StackedOn', parentPart: 'Main Leaf Layer', offset: [0, -5, 0] },
        color: '#5B8FA8',  // Steel blue – main support
      },
      {
        name: 'Chassis Support',
        file: '/models/Leaf Spring/Support-Chassis.glb',
        material: 'Steel',
        role: '차체 체결 브래킷',
        position: [0, 0, 0],
        explodeDirection: [0, -1, 0],
        explodeDistance: 60,
        constraint: { type: 'StackedOn', parentPart: 'Main Support', offset: [0, -4, 0] },
        color: '#3A6B8C',  // Dark blue – chassis support
      },
      {
        name: 'Rigid Support',
        file: '/models/Leaf Spring/Support-Chassis Rigid.glb',
        material: 'Steel',
        role: '차체 고정 리지드 서포트',
        position: [0, 0, 0],
        explodeDirection: [0, -1, 0],
        explodeDistance: 80,
        constraint: { type: 'StackedOn', parentPart: 'Chassis Support', offset: [0, -2, 0] },
        color: '#2E5A73',  // Navy – rigid support
      },
      {
        name: 'Rubber Bushing',
        file: '/models/Leaf Spring/Support-Rubber.glb',
        material: 'Rubber',
        role: '진동 흡수용 고무 부싱',
        position: [0, 0, 0],
        explodeDirection: [-1, -1, 0],
        explodeDistance: 100,
        constraint: { type: 'StackedOn', parentPart: 'Rigid Support', offset: [-20, 0, 0] },
        color: '#333333',  // Dark charcoal – rubber bushing
      },
      {
        name: 'Rubber 60mm',
        file: '/models/Leaf Spring/Support-Rubber 60mm.glb',
        material: 'Rubber',
        role: '60mm 대형 부싱',
        position: [0, 0, 0],
        explodeDirection: [1, -1, 0],
        explodeDistance: 100,
        constraint: { type: 'StackedOn', parentPart: 'Rigid Support', offset: [20, 0, 0] },
        color: '#444444',  // Charcoal – rubber 60mm bushing
      },
    ],
  },
  'Machine Vice': {
    id: 'Machine Vice',
    name: '공작 기계 바이스',
    description: '나사 구동 방식으로 공작물을 강력하게 고정하는 정밀 바이스입니다.',
    theory: `
**작동 원리:**
사다리꼴 나사(Trapez Spindle)를 손잡이로 회전시키면, 이동 조(Movable Jaw)가 직선 운동하여 고정 조(Fixed Jaw)와의 사이에 공작물을 고정합니다.

**주요 기능:**
- **강력 고정:** 사다리꼴 나사의 자동 잠금(Self-lock) 특성으로 진동에도 풀리지 않음
- **정밀 위치 결정:** 안내 레일(Guide Rail)이 이동 조의 직진도를 보장
- **다양한 공작물 대응:** 조(Jaw) 교체로 다양한 형상의 공작물에 적용

**주요 부품:**
- **Base Plate:** 작업대에 고정되는 기초판
- **Main Body:** 바이스의 뼈대로 안내면을 제공
- **Guide Rail:** 이동 조의 직진 운동을 안내
- **Fixed / Movable Jaw:** 공작물을 양측에서 잡아 고정
- **Clamping Jaw:** 공작물 접촉면으로 교체 가능
- **Trapez Spindle:** 회전→직선 변환 핵심 나사축
- **Spindle Socket:** 스핀들을 본체에 지지하는 소켓
- **Pressure Sleeve:** 스핀들 축 방향 하중을 지지하는 슬리브
`,
    thumbnail: '/models/Machine Vice/공작 기계 바이스.jpg',
    preferredScale: 80,
    parts: [
<<<<<<< HEAD
      {
        name: 'Base Plate',
        file: '/models/Machine Vice/Part8-grundplatte.glb',
        material: 'Cast Iron',
        role: '작업대 고정용 기초판',
        position: [0, 0, 0],
        isGround: true,
        explodeDirection: [0, 0, 0],
        color: '#5A5A5A',  // Dark gray – cast iron base
      },
      {
        name: 'Main Body',
        file: '/models/Machine Vice/Part1.glb',
        material: 'Cast Iron',
        role: '바이스 본체 프레임',
        position: [0, 0, 0],
        explodeDirection: [0, 1, 0],
        explodeDistance: 30,
        color: '#708090',  // Slate gray – main body
      },
      {
        name: 'Guide Housing',
        file: '/models/Machine Vice/Part1 Fuhrung.glb',
        material: 'Cast Iron',
        role: '이동 조 안내 하우징',
        position: [0, 0, 0],
        explodeDirection: [0, 1, 0],
        explodeDistance: 50,
        color: '#7B8D8E',  // Pewter – guide housing
      },
      {
        name: 'Guide Rail',
        file: '/models/Machine Vice/Part6-fuhrungschiene.glb',
        material: 'Hardened Steel',
        role: '직진 운동 안내 레일',
        position: [0, 0, 0],
        explodeDirection: [0, 1, 0.5],
        explodeDistance: 70,
        color: '#B8860B',  // Dark goldenrod – precision rail
      },
      {
        name: 'Fixed Jaw',
        file: '/models/Machine Vice/Part2 Feste Backe.glb',
        material: 'Steel',
        role: '고정 조',
        position: [0, 0, 0],
        explodeDirection: [0, 0.5, 1],
        explodeDistance: 60,
        color: '#2E8B57',  // Sea green – fixed jaw
      },
      {
        name: 'Movable Jaw',
        file: '/models/Machine Vice/Part3-lose backe.glb',
        material: 'Steel',
        role: '이동 조',
        position: [0, 0, 0],
        explodeDirection: [0, 0.5, -1],
        explodeDistance: 60,
        color: '#3CB371',  // Medium sea green – movable jaw
      },
      {
        name: 'Clamping Jaw',
        file: '/models/Machine Vice/Part5-Spannbacke.glb',
        material: 'Hardened Steel',
        role: '교체형 클램핑 조',
        position: [0, 0, 0],
        explodeDirection: [0, 1, -1],
        explodeDistance: 90,
        color: '#228B22',  // Forest green – clamping surface
      },
      {
        name: 'Spindle Socket',
        file: '/models/Machine Vice/Part4 spindelsockel.glb',
        material: 'Steel',
        role: '스핀들 지지 소켓',
        position: [0, 0, 0],
        explodeDirection: [0, 0, -1],
        explodeDistance: 80,
        color: '#CD853F',  // Peru – spindle socket
      },
      {
        name: 'Trapez Spindle',
        file: '/models/Machine Vice/Part7-TrapezSpindel.glb',
        material: 'Steel',
        role: '사다리꼴 나사 스핀들',
        position: [0, 0, 0],
        explodeDirection: [0, 0, -1],
        explodeDistance: 110,
        color: '#DAA520',  // Goldenrod – spindle shaft
      },
      {
        name: 'Pressure Sleeve',
        file: '/models/Machine Vice/Part9-Druckhulse.glb',
        material: 'Steel',
        role: '축 방향 압력 전달 슬리브',
        position: [0, 0, 0],
        explodeDirection: [0, 0, -1],
        explodeDistance: 130,
        color: '#A0522D',  // Sienna – pressure sleeve
      },
=======
      // === 기초판 (Ground) === GLB: 18.5×12×1, center [9.25, 3.75, 0.5]
      { name: 'Base Plate', file: '/models/Machine Vice/Part8-grundplatte.glb', material: 'Wood/Cast Iron', role: '기초 베이스 판', position: [0, 0, 0], rotation: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0], color: '#8B4513' },

      // === 본체 & 가이드 === 
      { name: 'Guide Body', file: '/models/Machine Vice/Part1 Fuhrung.glb', material: 'Cast Iron', role: '이동조 안내 가이드', position: [2.25, 1, 3.5], rotation: [0, 0, 0], explodeDirection: [0, 1, 0], explodeDistance: 15, color: '#404040' },
      { name: 'Main Body', file: '/models/Machine Vice/Part1.glb', material: 'Cast Iron', role: '바이스 본체 블록', position: [5.5, 1, 0.5], rotation: [0, 0, 0], explodeDirection: [0, 1, 0], explodeDistance: 10, color: '#505050' },

      // === 고정 조 (Fixed Jaw) === GLB: 7.5×5.5×2.5, center [3.75, 2.75, 1.25]  
      { name: 'Fixed Jaw', file: '/models/Machine Vice/Part2 Feste Backe.glb', material: 'Steel', role: '고정 조 (움직이지 않는 턱)', position: [5.5, 1, 3.5], rotation: [0, 0, 0], explodeDirection: [0, 0, 1], explodeDistance: 20, color: '#2D2D2D' },

      // === 스핀들 소켓 === GLB: 3.5×5.5×2, center [1.75, 2.75, 1]
      { name: 'Spindle Socket', file: '/models/Machine Vice/Part4 spindelsockel.glb', material: 'Cast Iron', role: '스핀들 지지대/소켓', position: [7.5, 1, -3], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 15, color: '#3D3D3D' },

      // === 가이드 레일 2개 === GLB: 5×1.9×0.6
      { name: 'Guide Rail L', file: '/models/Machine Vice/Part6-fuhrungschiene.glb', material: 'Steel', role: '좌측 슬라이드 가이드 레일', position: [2.5, 1, 1.5], rotation: [0, 0, 0], explodeDirection: [-1, 0, 0], explodeDistance: 20, color: '#B0B0B0' },
      { name: 'Guide Rail R', file: '/models/Machine Vice/Part6-fuhrungschiene.glb', material: 'Steel', role: '우측 슬라이드 가이드 레일', position: [8.5, 1, 1.5], rotation: [0, 0, 0], explodeDirection: [1, 0, 0], explodeDistance: 20, color: '#B0B0B0' },

      // === 사다리꼴 스핀들 === GLB: 1.9×1.9×15.5, center [0, 0, -5.75]
      { name: 'Trapez Spindle', file: '/models/Machine Vice/Part7-TrapezSpindel.glb', material: 'Steel', role: '이동조 구동 사다리꼴 나사(스핀들)', position: [9.25, 3.75, -2], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 30, color: '#DAA520' },

      // === 이동 조 (Movable Jaw) === GLB: 7.5×3.5×5, center [3.75, 0.15, -2.5]
      { name: 'Movable Jaw', file: '/models/Machine Vice/Part3-lose backe.glb', material: 'Steel', role: '이동 조 (스핀들로 이동하는 턱)', position: [5.5, 1.5, -2], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 25, color: '#2D2D2D' },

      // === 클램핑 표면판 (고정조+이동조용) === GLB: 7.7×2×0.8
      { name: 'Clamping Jaw (Fixed)', file: '/models/Machine Vice/Part5-Spannbacke.glb', material: 'Hardened Steel', role: '고정조 표면 클램핑 판', position: [5.5, 2, 4.8], rotation: [0, 0, 0], explodeDirection: [0, 0, 1], explodeDistance: 12, color: '#1A1A1A' },
      { name: 'Clamping Jaw (Movable)', file: '/models/Machine Vice/Part5-Spannbacke.glb', material: 'Hardened Steel', role: '이동조 표면 클램핑 판', position: [5.5, 2, -4.5], rotation: [0, Math.PI, 0], explodeDirection: [0, 0, -1], explodeDistance: 12, color: '#1A1A1A' },

      // === 압력 슬리브 (손잡이 끝) === GLB: 1.6×1.6×0.85
      { name: 'Pressure Sleeve', file: '/models/Machine Vice/Part9-Druckhulse.glb', material: 'Steel', role: '스핀들 핸들 압력 슬리브', position: [9.25, 3.75, -15], rotation: [0, 0, 0], explodeDirection: [0, 0, -1], explodeDistance: 15, color: '#FFD700' },
>>>>>>> d7ae60d (feat: V4 Engine explode animation - sequential 2-phase explosion, isGround fix, direction corrections)
    ],
  },
  'Robot Gripper': {
    id: 'Robot Gripper',
    name: '로봇 집게',
    description: '물체를 잡는 로봇 그리퍼입니다.',
    theory: `
**작동 원리:**
기어와 링크 기구로 집게 개폐
`,
    thumbnail: '/models/Robot Gripper/로봇집게 조립도.png',
    parts: [
      { name: 'Base Plate', file: '/models/Robot Gripper/Base Plate.glb', material: 'Aluminum', role: '그리퍼 베이스', position: [0, 0, 0], isGround: true, explodeDirection: [0, 0, 0] },
      { name: 'Mounting bracket', file: '/models/Robot Gripper/Base Mounting bracket.glb', material: 'Aluminum', role: '마운팅 브래킷', position: [0, 15, 0], explodeDirection: [0, 1, 0] },
      { name: 'Left Jaw', file: '/models/Robot Gripper/Gripper.glb', material: 'Aluminum', role: '왼쪽 집게 조', position: [-20, 30, 0], explodeDirection: [-1, 1, 0] },
      { name: 'Right Jaw', file: '/models/Robot Gripper/Gripper.glb', material: 'Aluminum', role: '오른쪽 집게 조', position: [20, 30, 0], explodeDirection: [1, 1, 0] },
    ],
  },
};

export const machineryList = Object.values(machineryData);
