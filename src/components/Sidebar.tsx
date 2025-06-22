import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  BookOpen,
  Code,
  GraduationCap,
  Code2,
  ExternalLink,
  Home,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Category, MarkdownDocument } from '@/types/markdown-content-types';

interface SidebarProps {
  categories: Category[];
  selectedDocument: MarkdownDocument | null;
  onDocumentSelect: (document: MarkdownDocument) => void;
  className?: string;
}

export function Sidebar({ categories, selectedDocument, onDocumentSelect, className }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['getting-started']));
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleDocumentSelect = (document: MarkdownDocument) => {
    onDocumentSelect(document);
    setIsMobileOpen(false); // Close mobile sidebar when document is selected
  };

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
      Home,
      BookOpen,
      Code,
      GraduationCap,
      Code2,
      ExternalLink,
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {categories.map((category, index) => {
            const isExpanded = expandedCategories.has(category.id);

            return (
              <div key={category.id} className="space-y-[0.5px]">
                <button
                  onClick={() => toggleCategory(category.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={cn(
                    'group w-full relative flex items-center justify-between py-1 px-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors',
                    'cursor-pointer transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm animate-in fade-in-50 slide-in-from-bottom-4'
                  )}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-center space-x-2">
                    {getIcon(category.icon)}
                    <span>{category.title}</span>
                  </div>
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}

                  <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </button>

                {isExpanded && (
                  <div className="ml-6 space-y-1">
                    {category.documents.map((document) => (
                      <button
                        key={document.id}
                        onClick={() => handleDocumentSelect(document)}
                        className={cn(
                          'w-full text-left py-1 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors',
                          selectedDocument?.id === document.id &&
                            'bg-blue-500/20 border-blue-200 border shadow-sm dark:bg-gray-200/10 dark:border-gray-200/10 font-medium text-foreground'
                        )}
                      >
                        {document.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-border rounded-md shadow-sm"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Desktop sidebar */}
      <aside className={cn('hidden lg:block w-80 bg-background border-r border-border', className)}>
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={cn(
          'lg:hidden fixed left-0 top-0 z-50 w-80 h-full bg-background border-r border-border transform transition-transform duration-200 ease-in-out',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-accent rounded-md transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        {sidebarContent}
      </aside>
    </>
  );
}
