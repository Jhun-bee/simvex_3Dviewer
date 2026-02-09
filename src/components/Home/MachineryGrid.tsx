import { machineryList, machineryData } from '../../data/machineryData';
import MachineryCard from './MachineryCard';
import {
  useLastStudiedMachinery,
  useHasLearningActivity,
  useMachineryProgress,
  getTimeAgo,
} from '../../hooks/useMachineryProgress';
import { Box, MessageCircle, HelpCircle, StickyNote, Search, ArrowRight } from 'lucide-react';

interface MachineryGridProps {
  onSelect: (id: string) => void;
}

function ContinueLearningHero({ onSelect }: { onSelect: (id: string) => void }) {
  const lastStudied = useLastStudiedMachinery();
  if (!lastStudied) return null;

  const machinery = machineryData[lastStudied.machineryId];
  if (!machinery) return null;

  return <ContinueLearningCard machinery={machinery} timestamp={lastStudied.timestamp} onSelect={() => onSelect(machinery.id)} />;
}

function ContinueLearningCard({
  machinery,
  timestamp,
  onSelect,
}: {
  machinery: (typeof machineryList)[number];
  timestamp: number;
  onSelect: () => void;
}) {
  const progress = useMachineryProgress(machinery.id);

  const barColor =
    progress.progressPercent >= 80
      ? 'bg-green-500'
      : progress.progressPercent >= 40
        ? 'bg-blue-400'
        : 'bg-blue-300';

  return (
    <div className="mb-10">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">이어서 학습하기</h3>
      <div
        onClick={onSelect}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-shadow flex items-center gap-6"
      >
        <img
          src={machinery.thumbnail}
          alt={machinery.name}
          className="hidden sm:block w-24 h-24 object-contain rounded-xl bg-white p-2 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-xl font-bold text-gray-800 mb-1">{machinery.name}</h4>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            {progress.noteCount > 0 && (
              <span className="flex items-center gap-1">
                <StickyNote className="w-3.5 h-3.5" />
                노트 {progress.noteCount}개
              </span>
            )}
            {progress.aiInteractionCount > 0 && (
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" />
                질문 {progress.aiInteractionCount}개
              </span>
            )}
            <span className="text-gray-400">{getTimeAgo(timestamp)}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full ${barColor} rounded-full transition-all`} style={{ width: `${progress.progressPercent}%` }} />
            </div>
            <span className="text-sm font-medium text-gray-600">{progress.progressPercent}%</span>
          </div>
        </div>
        <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0 hidden sm:block" />
      </div>
    </div>
  );
}

const features = [
  { icon: Box, label: '3D 뷰어', desc: '기계 구조를 입체적으로 탐색' },
  { icon: MessageCircle, label: 'AI 도우미', desc: '궁금한 점을 즉시 질문' },
  { icon: HelpCircle, label: '퀴즈', desc: '학습 내용을 문제로 확인' },
  { icon: StickyNote, label: '노트', desc: '부품별 메모를 자유롭게 작성' },
  { icon: Search, label: '지식 검색', desc: '기계 관련 지식을 빠르게 탐색' },
];

function FeatureOverview() {
  return (
    <div className="mb-10">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">SimVex로 학습하는 방법</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {features.map((f) => (
          <div key={f.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <f.icon className="w-7 h-7 mx-auto mb-2 text-blue-500" />
            <p className="text-sm font-semibold text-gray-800">{f.label}</p>
            <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MachineryGrid({ onSelect }: MachineryGridProps) {
  const hasActivity = useHasLearningActivity();

  return (
    <div className="w-full h-full p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            학습할 기계 장비를 선택하세요
          </h2>
          <p className="text-lg text-gray-600">
            3D 뷰어를 통해 기계의 구조를 탐험하고 학습하세요
          </p>
        </div>

        {hasActivity ? (
          <ContinueLearningHero onSelect={onSelect} />
        ) : (
          <FeatureOverview />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {machineryList.map((machinery) => (
            <MachineryCard
              key={machinery.id}
              machinery={machinery}
              onSelect={() => onSelect(machinery.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
