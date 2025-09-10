/* eslint-disable @typescript-eslint/no-explicit-any */
import { Github, Menu } from 'lucide-react';
import React, { useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import Logo from '../Logo';
import { ThemeToggle } from '../ThemeToggle';
import { useMobileStore } from '@/stores/useMobileStore';
import { useLocation } from 'react-router-dom';
import { useOpenSearchDialog } from '@/stores/useOpenSearchDialog';
import { Button } from 'kalki-ui';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  menu?: MenuItem[];
}

const Navbar = ({
  menu = [
    { title: 'Resources', url: '/resources' },
    { title: 'RoadMaps', url: '/road-maps' },
    { title: 'Mock Assessment', url: '/mock-assessment' },
  ],
}: NavbarProps) => {
  const location = useLocation();
  const { isMobileOpen, setIsMobileOpen, toggleMobile } = useMobileStore();
  const { isSearchDialogOpen, setIsSearchDialogOpen, toggleSearchDialog } = useOpenSearchDialog();

  // Handle Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: { ctrlKey: any; key: string; preventDefault: () => void }) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        toggleSearchDialog();
      }

      // Close dialog on Escape
      if (event.key === 'Escape' && isSearchDialogOpen) {
        setIsSearchDialogOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchDialogOpen, setIsSearchDialogOpen, toggleSearchDialog]);

  return (
    <div className="flex h-11 justify-between space-x-10 fixed top-0 z-50 w-full  border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-inherit">
      {/* Desktop Menu */}
      <nav className="hidden px-10 justify-between lg:flex w-full">
        <div className="flex items-center justify-between gap-6 w-full">
          {/* Logo */}
          <div className="flex items-center ">
            <a href="/" className="text-md w-auto">
              <Logo />
            </a>
            <div className="flex items-center mx-5">
              <NavigationMenu>
                <NavigationMenuList className="text-muted-foreground">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {location.pathname === '/resources' && (
              <div className="p-4 lg:p-6">
                <div className="relative max-w-md">
                  <Button variant="ghost" size="xs" className="border border-border" onClick={toggleSearchDialog}>
                    Search topics...
                    <kbd className="bg-muted/30 px-2 py-0.5 ml-5 rounded text-xs font-mono">Ctrl k</kbd>
                  </Button>
                </div>
              </div>
            )}
            <ThemeToggle />
            <a
              href="https://github.com/RaviTejaLadi/Frontend-Interview-Prep-Kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="xs" accessKey="View source code" aria-label="View source code">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden py-1 flex justify-between items-center w-full">
        <div className="flex items-center justify-start gap-4">
          {/* Mobile menu button */}
          <Button
            size={'xs'}
            variant={'outline'}
            onClick={() =>
              (location.pathname === '/resources' || location.pathname === '/road-maps')
                ? toggleMobile()
                : setIsMobileOpen(true)
            }
          >
            <Menu className="w-5 h-5" />
          </Button>
          {/* Logo */}
          <a href="/" className="text-md w-auto">
            <Logo />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/RaviTejaLadi/Frontend-Interview-Prep-Kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="xs" accessKey="View source code" aria-label="View source code">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile sheet for routes without their own sidebar (e.g., Home) */}
      {location.pathname !== '/resources' && location.pathname !== '/road-maps' && (
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent side="left" className="w-80 p-0 border border-border">
            <SheetHeader className="px-4 py-2 border-b border-border">
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-screen">
              <nav className="py-4">
                <ul className="flex flex-col">
                  {menu.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.url}
                        className="block px-4 py-3 text-sm hover:bg-muted"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-6 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>}
      </div>
    </a>
  );
};

export { Navbar };
