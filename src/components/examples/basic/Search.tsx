/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

interface SearchProps<T> {
  items: T[];
  onSearch: (filteredItems: T[]) => void;
  searchKeys?: Array<keyof T>;
}

const Search = <T extends Record<string, any>>({ items, onSearch, searchKeys = [] }: SearchProps<T>) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      onSearch(items);
      return;
    }

    const filteredItems = items.filter((item) => {
      if (searchKeys.length > 0) {
        return searchKeys.some((key) => String(item[key]).toLowerCase().includes(value.toLowerCase()));
      }
      return Object.values(item).some((val) => String(val).toLowerCase().includes(value.toLowerCase()));
    });

    onSearch(filteredItems);
  };

  return (
    <div className="w-full max-w-sm">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="w-full border bg-inherit border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;

interface Product {
  id: number;
  name: string;
  category: string;
}

export const SearchUsage: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-Shirt', category: 'Clothing' },
    { id: 3, name: 'Smartphone', category: 'Electronics' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  return (
    <div className="app">
      <Search items={products} onSearch={setFilteredProducts} searchKeys={['name', 'category']} />
      <ul className="mt-5">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
};
