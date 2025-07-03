import { Github, Menu, Search, X } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { useMobileStore } from '@/stores/useMobileStore';
import { Input } from './ui/input';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  menu?: MenuItem[];

  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Navbar = ({
  menu = [
    // { title: "Get Started", url: "/get-started" },
    // { title: "Components", url: "/components" },
    // { title: "Blocks", url: "/blocks" },
    // { title: "Colors", url: "/colors" },
  ],
  searchTerm,
  onSearchChange,
}: NavbarProps) => {
  const { toggleMobile } = useMobileStore();
  const clearSearch = () => {
    onSearchChange('');
  };
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
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="text-muted-foreground">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 lg:p-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search topic..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-1 text-sm border-none border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
              </div>
            </div>
            <ThemeToggle />
            <a
              href="https://github.com/RaviTejaLadi/Frontend-Interview-Prep-Kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" accessKey="View source code" aria-label="View source code">
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
          <Button size={'icon'} variant={'outline'} onClick={toggleMobile}>
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
            <Button variant="ghost" size="icon" accessKey="View source code" aria-label="View source code">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
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
