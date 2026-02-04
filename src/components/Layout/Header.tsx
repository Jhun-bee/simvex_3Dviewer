import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Network, MoreVertical, FileDown, Share2, Settings } from 'lucide-react';
import { machineryData } from '../../data/machineryData';

interface HeaderProps {
  currentPage: 'home' | 'viewer' | 'flowchart';
  onBack: () => void;
  onFlowchart: () => void;
  selectedMachinery: string | null;
}

export default function Header({
  currentPage,
  onBack,
  onFlowchart,
  selectedMachinery,
}: HeaderProps) {
  const machinery = selectedMachinery ? machineryData[selectedMachinery] : null;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleExportPDF = () => {
    setMenuOpen(false);
    // Dispatch custom event for Sidebar to handle (has access to notes/AI stores)
    window.dispatchEvent(new CustomEvent('simvex:exportPDF'));
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        {currentPage !== 'home' && (
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="홈으로"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}
        <div>
          <h1 className="text-2xl font-bold text-primary">SIMVEX</h1>
          {machinery && (
            <p className="text-sm text-gray-600">{machinery.name}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {currentPage === 'viewer' && (
          <>
            <button
              onClick={onFlowchart}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Network className="w-5 h-5" />
              <span>워크플로우</span>
            </button>

            {/* Context Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="더보기"
              >
                <MoreVertical className="w-6 h-6 text-gray-700" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <button
                    onClick={handleExportPDF}
                    className="w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">PDF 내보내기</span>
                  </button>
                  <button
                    className="w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Share2 className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">공유 (준비중)</span>
                  </button>
                  <button
                    className="w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Settings className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">설정 (준비중)</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
