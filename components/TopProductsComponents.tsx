import React from 'react';
import { useDashboard } from '@/Context/DashboardContext';

const TopProductsComponent = () => {
  const { data, setData } = useDashboard();
  const products = data?.topProducts;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-box border border-gray-100 w-full max-w-[645px] min-h-[300px] sm:h-[351px]">
      {/* Header */}
      <h2 className="text-lg sm:text-xl font-semibold subtitle mb-4 sm:mb-6">Top Products</h2>
      
      {/* Desktop Table Header - Hidden on mobile */}
      <div className="hidden sm:flex items-center mb-4 text-xs text-gray-400 font-medium uppercase tracking-wide">
        <div className="w-12 text-left">#</div>
        <div className="flex-1 text-left">Name</div>
        <div className="w-32 lg:w-40 text-left">Popularity</div>
        <div className="w-16 text-right">Sales</div>
      </div>

      {/* Product Rows */}
      <div className="divide-y divide-gray-100">
        {products?.map((product) => (
          <div key={product.id} className="py-3 sm:py-4">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center">
              {/* Index */}
              <div className="w-12 text-sm text-gray-500 font-normal">
                {product.id}
              </div>
              
              {/* Product Name */}
              <div className="flex-1 text-sm text-gray-700 font-normal">
                {product.name}
              </div>
              
              {/* Popularity Bar */}
              <div className="w-32 lg:w-[180px] pr-4">
                <div className="relative h-[4px] rounded-full overflow-hidden" style={{ backgroundColor: product.lightColor }}>
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: product.color
                    }}
                  />
                </div>
              </div>
              
              {/* Sales Percentage */}
              <div className="w-16 text-right">
                <span
                  className="inline-block px-2.5 py-1 text-xs font-medium"
                  style={{
                    borderRadius: '8px',
                    color: product.color,
                    border: `1px solid ${product.color}`,
                    backgroundColor: product.lightColor
                  }}
                >
                  {product.sales}%
                </span>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden space-y-2">
              {/* Top Row: Index, Name, and Sales */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-500 font-normal">
                    #{product.id}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    {product.name}
                  </div>
                </div>
                <span
                  className="inline-block px-2.5 py-1 text-xs font-medium"
                  style={{
                    borderRadius: '8px',
                    color: product.color,
                    border: `1px solid ${product.color}`,
                    backgroundColor: product.lightColor
                  }}
                >
                  {product.sales}%
                </span>
              </div>
              
              {/* Bottom Row: Popularity Bar */}
              <div className="space-y-1">
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Popularity
                </div>
                <div className="relative h-[4px] rounded-full overflow-hidden" style={{ backgroundColor: product.lightColor }}>
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: product.color
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsComponent;