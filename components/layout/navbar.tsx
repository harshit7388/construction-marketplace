'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  Building2, 
  User,
  ChevronDown
} from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import SearchBar from '@/components/common/search-bar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '#', 
      label: 'Categories', 
      dropdown: true,
      items: [
        { href: '/category/cement', label: 'Cement' },
        { href: '/category/bricks', label: 'Bricks' },
        { href: '/category/steel', label: 'Steel & Iron' },
        { href: '/category/tiles', label: 'Tiles' },
        { href: '/category/paints', label: 'Paints' },
        { href: '/category/tools', label: 'Tools & Equipment' }
      ]
    },
    { href: '/sellers', label: 'Sellers' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/request-quote', label: 'Request Quote' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white dark:bg-gray-900 shadow-md" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl md:text-2xl font-bold text-primary">BuildMart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => link.dropdown ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center space-x-1">
                  <span className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  )}>
                    {link.label}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.items?.map((item) => (
                    <Link 
                      key={item.label}
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={link.label}
                href={link.href} 
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link href="/cart" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <User className="h-5 w-5 text-primary" />
                  <span className="hidden sm:inline text-sm font-medium">{user.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Profile
                  </Link>
                  <Link 
                    href="/orders" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Orders
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="flex flex-col h-full">
                  <div className="px-6 py-4 border-b">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center space-x-2">
                        <Building2 className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold">BuildMart</span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" aria-label="Close">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                  <nav className="flex-1 p-6 space-y-4">
                    {navLinks.map((link) => (
                      <div key={link.label}>
                        {link.dropdown ? (
                          <div className="space-y-3">
                            <div className="font-medium">{link.label}</div>
                            <div className="pl-4 space-y-2 border-l border-border">
                              {link.items?.map((item) => (
                                <SheetClose key={item.label} asChild>
                                  <Link 
                                    href={item.href} 
                                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                                  >
                                    {item.label}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <SheetClose asChild>
                            <Link 
                              href={link.href} 
                              className={cn(
                                "block py-2 text-base font-medium transition-colors",
                                pathname === link.href
                                  ? "text-primary" 
                                  : "text-muted-foreground hover:text-primary"
                              )}
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="p-6 border-t">
                    {user ? (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-5 w-5 text-primary" />
                          <span className="font-medium">{user.name}</span>
                        </div>
                        <div className="space-y-2">
                          <SheetClose asChild>
                            <Link href="/profile" className="block py-1 text-sm text-muted-foreground hover:text-primary">
                              My Profile
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/orders" className="block py-1 text-sm text-muted-foreground hover:text-primary">
                              My Orders
                            </Link>
                          </SheetClose>
                          <button
                            onClick={logout}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <SheetClose asChild>
                          <Link href="/login">
                            <Button className="w-full">Login</Button>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/register">
                            <Button variant="outline" className="w-full">Register</Button>
                          </Link>
                        </SheetClose>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl p-4">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;