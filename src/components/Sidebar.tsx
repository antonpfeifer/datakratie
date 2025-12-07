import Link from 'next/link';
import { BookOpen, TrendingUp, Newspaper } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-4">
      <div className="mb-8">
        <BookOpen className="w-8 h-8 text-gray-800" />
      </div>
      <nav className="space-y-2">
        <Link href="/" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
          <BookOpen className="w-5 h-5" />
          <span>Haushalt</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
          <TrendingUp className="w-5 h-5" />
          <span>Kurse</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
          <Newspaper className="w-5 h-5" />
          <span>Aktuelles</span>
        </Link>
      </nav>
    </div>
  );
}
