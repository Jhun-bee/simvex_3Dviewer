import { engineParts } from './engine';
import { suspensionParts } from './suspension';
import { robotArmParts } from './robotArm';
import { droneParts } from './drone';
import { leafSpringParts } from './leafSpring';
import { machineViceParts } from './machineVice';
import { robotGripperParts } from './robotGripper';
import { Machinery } from '../../types';

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
        parts: suspensionParts,
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
        parts: robotArmParts,
    },
    V4_Engine: {
        id: 'V4_Engine',
        name: 'V4 실린더 엔진',
        description: '내연기관의 핵심인 4기통 V형 엔진입니다.',
        theory: `
**작동 원리:**
1. 흡입 -> 2. 압축 -> 3. 폭발 -> 4. 배기
`,
        thumbnail: '/models/V4_Engine/V4실린더 엔진 조립도.png',
        preferredScale: 60,
        parts: engineParts,
    },
    Drone: {
        id: 'Drone',
        name: '쿼드콥터 드론',
        description: '4개의 로터를 이용해 비행하는 드론 시스템입니다.',
        theory: `
**작동 원리:**
4개의 로터를 독립적으로 제어하여 추력과 토크의 균형을 맞춤으로써 비행합니다.
`,
        thumbnail: '/models/Drone/조립도1.png',
        parts: droneParts,
    },
    'Leaf Spring': {
        id: 'Leaf Spring',
        name: '판 스프링',
        description: '여러 겹의 탄성이 있는 강판을 겹쳐 만든 충격 흡수 장치입니다.',
        theory: `
**작동 원리:**
강철판이 굽어질 때 발생하는 복원력을 이용해 충격을 흡수합니다. 
`,
        thumbnail: '/models/Leaf Spring/판스프링 조립도.png',
        preferredScale: 80,
        parts: leafSpringParts,
    },
    'Machine Vice': {
        id: 'Machine Vice',
        name: '공작 기계 바이스',
        description: '나사 구동 방식으로 공작물을 강력하게 고정하는 정밀 바이스입니다.',
        theory: `
**작동 원리:**
사다리꼴 나사를 손잡이로 회전시키면, 이동 조가 직선 운동하여 고정 조와의 사이에 공작물을 고정합니다.
`,
        thumbnail: '/models/Machine Vice/공작 기계 바이스.jpg',
        preferredScale: 80,
        parts: machineViceParts,
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
        parts: robotGripperParts,
    },
};

export const machineryList = Object.values(machineryData);
