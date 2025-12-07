'use client';

import { BudgetDataPoint } from '@/data/budget';
import { X, ZoomIn } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BudgetDataPoint | null;
  onZoom: (id: string) => void;
  hasChildren: boolean;
}

export function DetailModal({ isOpen, onClose, data, onZoom, hasChildren }: DetailModalProps) {
  if (!isOpen || !data) return null;

  const chartData = Object.entries(data.history).map(([year, value]) => ({
    year,
    value,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 m-4 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{data.label}</h2>
          <p className="text-gray-500 text-sm">{data.unit}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Beschreibung</h3>
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
            <div className="mt-4">
              <span className="block text-sm text-gray-500">Aktueller Wert (2025)</span>
              <span className="text-3xl font-bold text-gray-900">
                {data.value} {data.unit}
              </span>
            </div>
          </div>

          <div className="h-64 w-full">
            <h3 className="font-semibold text-gray-900 mb-2">Entwicklung</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={data.color || '#3b82f6'}
                  strokeWidth={3}
                  dot={{ r: 4, fill: 'white', strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
          >
            Schließen
          </button>
          {hasChildren && (
            <button
              onClick={() => {
                onZoom(data.id);
                onClose();
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Details anzeigen (Zoom)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
