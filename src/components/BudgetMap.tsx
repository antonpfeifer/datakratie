'use client';

import { useState, useMemo } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';
import { BudgetDataPoint, budgetData } from '@/data/budget';
import { buildTree, TreeNode } from '@/utils/tree';
import { ArrowLeft, Info } from 'lucide-react';
import { DetailModal } from './DetailModal';

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

interface CustomContentProps {
  root: TreeNode;
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  payload: TreeNode;
  colors: string[];
  rank: number;
  name: string;
  onItemClick: (item: TreeNode) => void;
}

const CustomContent = (props: CustomContentProps) => {
  const { x, y, width, height, payload, onItemClick } = props;

  return (
    <g>
      <foreignObject x={x} y={y} width={width} height={height}>
        <div
          className="w-full h-full p-1 box-border"
          onClick={() => onItemClick(payload)}
        >
          <div
            className="w-full h-full rounded-lg shadow-sm border border-white/20 flex flex-col p-3 cursor-pointer hover:shadow-md transition-all hover:scale-[0.99]"
            style={{ backgroundColor: payload.color || '#e5e7eb' }}
          >
            <div className="flex justify-between items-start">
              <span className="font-bold text-gray-900 text-sm md:text-base truncate pr-2">
                {payload.label}
              </span>
              <Info className="w-4 h-4 text-gray-700 opacity-50" />
            </div>
            <div className="mt-auto">
              <span className="text-lg md:text-xl font-black text-gray-900">
                {payload.value}
              </span>
              <span className="text-xs text-gray-700 ml-1">{payload.unit}</span>
            </div>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

export function BudgetMap() {
  const [rootId, setRootId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<BudgetDataPoint | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentRoot = useMemo(() => {
    if (!rootId) return null;
    return budgetData.find((d) => d.id === rootId) || null;
  }, [rootId]);

  const treeData = useMemo(() => {
    // If no rootId, show top level items (parentId = null)
    // If rootId, show children of rootId
    // Recharts Treemap expects an array of objects with 'children' property for nesting,
    // OR a flat list if we manage depth?
    // Actually, Recharts Treemap takes a single root object or array of roots.
    // If we want to "Zoom", we should pass the children of the current root as the data.
    
    // However, Recharts Treemap usually expects a single root node with children.
    // Let's wrap our data in a dummy root if we are at the top level?
    // Or just pass the array of nodes.
    
    const nodes = buildTree(budgetData, rootId);
    
    // If we are at a leaf node (no children), we might want to show the node itself?
    // But the UI logic is: Click -> Modal -> Zoom.
    // If we zoom into a leaf, there's nothing to show.
    // So we should only zoom if there are children.
    
    return nodes;
  }, [rootId]);

  const handleItemClick = (item: TreeNode) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleZoom = (id: string) => {
    setRootId(id);
  };

  const handleBack = () => {
    if (!currentRoot) return;
    setRootId(currentRoot.parentId);
  };

  // Check if current root has children to display
  const hasData = treeData && treeData.length > 0;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {rootId && (
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {currentRoot ? currentRoot.label : 'Gesamthaushalt 2025'}
            </h1>
            <p className="text-gray-500">
              {currentRoot ? currentRoot.description : 'Übersicht aller Ausgaben'}
            </p>
          </div>
        </div>
        <div className="text-right">
            <span className="text-sm text-gray-500">Gesamtvolumen</span>
            <div className="text-2xl font-bold text-gray-900">
                {currentRoot ? currentRoot.value : budgetData.find(d => d.id === 'root')?.value} Mrd. €
            </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-4 min-h-[500px]">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={treeData as any[]}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="#fff"
              fill="#8884d8"
              content={<CustomContent onItemClick={handleItemClick} root={treeData[0]} depth={1} x={0} y={0} width={0} height={0} index={0} payload={treeData[0]} colors={[]} rank={0} name="" />}
            />
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Keine weiteren Unterkategorien verfügbar.
          </div>
        )}
      </div>

      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedItem}
        onZoom={handleZoom}
        hasChildren={selectedItem ? budgetData.some(d => d.parentId === selectedItem.id) : false}
      />
    </div>
  );
}
