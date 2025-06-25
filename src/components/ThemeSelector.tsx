import React from 'react';
import { useTheme } from '@/context/ThemeTestContext';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const themes = [
  {
    id: 'ocean' as const,
    name: 'Professional Ocean',
    description: 'Trust & confidence',
    colors: ['#E5F3FF', '#0EA5E9', '#0284C7'],
  },
  {
    id: 'purple' as const,
    name: 'Modern Purple',
    description: 'Innovation & creativity',
    colors: ['#F3E8FF', '#8B5CF6', '#7C3AED'],
  },
  {
    id: 'emerald' as const,
    name: 'Emerald Green',
    description: 'Growth & success',
    colors: ['#ECFDF5', '#10B981', '#059669'],
  },
  {
    id: 'amber' as const,
    name: 'Warm Amber',
    description: 'Energy & motivation',
    colors: ['#FFFBEB', '#F59E0B', '#D97706'],
  },
  {
    id: 'rose' as const,
    name: 'Rose Gold',
    description: 'Premium & sophisticated',
    colors: ['#FFF1F2', '#F43F5E', '#E11D48'],
  },
  {
    id: 'teal' as const,
    name: 'Teal Mint',
    description: 'Fresh & modern',
    colors: ['#F0FDFA', '#14B8A6', '#0D9488'],
  },
];

export const ThemeSelector: React.FC = () => {
  const { colorTheme, setColorTheme } = useTheme();

  return (
    <Select value={colorTheme} onValueChange={setColorTheme}>
      <SelectTrigger className="w-[10rem]">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent className="bg-background">
        <SelectGroup>
          {themes.map((theme) => (
            <SelectItem className="text-muted-foreground" key={theme.id} value={theme.id}>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium">{theme.name}</p>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
