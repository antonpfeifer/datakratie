'use client';

import React, { useMemo } from 'react';
import { TransformWrapper, TransformComponent, useTransformContext } from 'react-zoom-pan-pinch';
import * as d3 from 'd3-hierarchy';
import { BudgetDataPoint, budgetData } from '@/data/budget';

// Helper to convert flat data to hierarchy
function buildHierarchy(data: BudgetDataPoint[]) {
  const root = data.find((d) => d.parentId === null);
  if (!root) throw new Error('No root found');

  const stratify = d3.stratify<BudgetDataPoint>()
    .id((d) => d.id)
    .parentId((d) => d.parentId);

  return stratify(data)
    .sum((d) => d.value)
    .sort((a, b) => (b.value || 0) - (a.value || 0));
}

interface NodeProps {
  node: d3.HierarchyRectangularNode<BudgetDataPoint>;
  scale: number;
  parentX?: number;
  parentY?: number;
}

const BudgetNode = ({ node, scale, parentX = 0, parentY = 0 }: NodeProps) => {
  const width = node.x1 - node.x0;
  const height = node.y1 - node.y0;
  
  // Calculate visible dimensions based on current zoom scale
  const visibleWidth = width * scale;
  const visibleHeight = height * scale;

  // Semantic Zoom Thresholds
  // Only show children if we are zoomed in (scale > 1.1) to keep the initial view clean
  const showLabel = visibleWidth > 40 && visibleHeight > 20;
  const showDetails = visibleWidth > 100 && visibleHeight > 60;
  const showChildren = scale > 1.1 && visibleWidth > 90 && visibleHeight > 60;

  const isLeaf = !node.children || node.children.length === 0;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div
      className="absolute border border-white/20 transition-colors hover:bg-black/5 overflow-hidden"
      style={{
        left: `${node.x0 - parentX}px`,
        top: `${node.y0 - parentY}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: node.data.color || '#e5e7eb',
      }}
    >
      {/* Content Layer */}
      <div className="relative w-full h-full p-2">
        {showLabel && (
          <div className="font-bold text-gray-900 truncate text-sm">
            {node.data.label}
          </div>
        )}
        
        {showDetails && (
          <div className="text-xs text-gray-700">
            {node.value} {node.data.unit}
          </div>
        )}

        {/* Render Children if zoomed in enough */}
        {hasChildren && showChildren && (
          <div className="absolute inset-0">
            {node.children!.map((child) => (
              <BudgetNode 
                key={child.data.id} 
                node={child as d3.HierarchyRectangularNode<BudgetDataPoint>} 
                scale={scale} 
                parentX={node.x0}
                parentY={node.y0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Wrapper to access transform context
const MapContent = ({ root }: { root: d3.HierarchyRectangularNode<BudgetDataPoint> }) => {
  const { transformState } = useTransformContext();
  const { scale } = transformState;

  return (
    <div
      style={{
        width: 1000, // Fixed base coordinate system
        height: 600,
        position: 'relative',
      }}
    >
      {/* Render top level children. 
          If we render the root itself, it covers everything. 
          Usually we want to render the children of the root to see the breakdown.
          Or render the root as a container.
      */}
      {root.children ? (
        root.children.map((child) => (
          <BudgetNode key={child.data.id} node={child as d3.HierarchyRectangularNode<BudgetDataPoint>} scale={scale} />
        ))
      ) : (
        <BudgetNode node={root} scale={scale} />
      )}
    </div>
  );
};

export function ZoomableBudgetMap() {
  const root = useMemo(() => {
    const hierarchy = buildHierarchy(budgetData);
    const treemap = d3.treemap<BudgetDataPoint>()
      .size([1000, 600]) // Base size
      .paddingOuter(4)
      .paddingInner(2)
      .round(true);
    
    return treemap(hierarchy);
  }, []);

  return (
    <div className="h-full w-full bg-gray-50 overflow-hidden rounded-xl border border-gray-200 relative">
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm">
        <h2 className="font-bold text-gray-900">Haushaltsplan 2025</h2>
        <p className="text-xs text-gray-500">Scrollen zum Zoomen • Ziehen zum Bewegen</p>
      </div>
      
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={20}
        centerOnInit
        limitToBounds={false}
        wheel={{ step: 0.1 }}
      >
        <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
          <MapContent root={root} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
