'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Mock search suggestions
const searchSuggestions = [
  { type: 'category', name: 'Cement & Concrete', slug: '/category/cement' },
  { type: 'category', name: 'Bricks & Blocks', slug: '/category/bricks' },
  { type: 'category', name: 'Steel & Iron', slug: '/category/steel' },
  { type: 'product', name: 'Portland Cement (50kg bag)', slug: '/product/portland-cement-50kg' },
  { type: 'product', name: 'Clay Bricks (500 pcs)', slug: '/product/clay-bricks-500' },
  { type: 'product', name: 'TMT Steel Bars (12mm)', slug: '/product/tmt-steel-bars-12mm' },
  { type: 'seller', name: 'BuildSupply Co.', slug: '/seller/buildsupply-co' },
  { type: 'seller', name: 'Cement Direct', slug: '/seller/cement-direct' }
];

interface SearchBarProps {
  onClose?: () => void;
  className?: string;
}

const SearchBar = ({ onClose, className }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      if (onClose) onClose();
    }
  };

  const handleSuggestionClick = (slug: string) => {
    router.push(slug);
    if (onClose) onClose();
  };

  // Filter suggestions based on search query
  const filteredSuggestions = searchQuery.trim() 
    ? searchSuggestions.filter(suggestion => 
        suggestion.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          
          <Input
            type="text"
            placeholder="Search products, materials, sellers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsActive(true)}
            className="pl-10 pr-10 h-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          />
          
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setIsActive(true);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {onClose && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-3 -top-12"
          >
            <X className="h-5 w-5" />
          </Button>
        )}

        {/* Search suggestions */}
        {isActive && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10 max-h-80 overflow-y-auto">
            <div className="p-2">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion.slug)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center"
                >
                  <div className="flex-1">
                    <div className="font-medium">{suggestion.name}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {suggestion.type}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;