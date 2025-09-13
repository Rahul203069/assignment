import React from 'react';
import { useDashboard } from '@/Context/DashboardContext';

const TopProductsComponent = () => {
  const { data } = useDashboard();
  const products = data?.topProducts;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-box border border-gray-100 w-full max-w-[645px] mx-auto min-h-[300px] sm:min-h-[351px] overflow-hidden">
      {/* Header */}
      <h2 className="text-lg sm:text-xl font-semibold subtitle mb-4 sm:mb-6 truncate">Top Products</h2>

      {/* Desktop Table Header */}
      <div className="hidden sm:flex items-center mb-3 text-xs text-gray-400 font-medium uppercase tracking-wide">
        <div className="w-12 text-left">#</div>
        <div className="flex-1 text-left truncate">Name</div>
        <div className="w-32 lg:w-40 text-left">Popularity</div>
        <div className="w-16 text-right">Sales</div>
      </div>

      {/* Product Rows */}
      <div className="divide-y divide-gray-100 overflow-x-auto">
        {products?.map((product) => (
          <div key={product.id} className="py-3 sm:py-4">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center flex-nowrap">
              <div className="w-12 text-sm text-gray-500 font-normal truncate">
                {product.id}
              </div>

              <div className="flex-1 text-sm text-gray-700 font-normal truncate">
                {product.name}
              </div>

              <div className="w-32 lg:w-[180px] pr-4 min-w-[100px]">
                <div className="relative h-[4px] rounded-full overflow-hidden w-full bg-gray-200">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: product.color
                    }}
                  />
                </div>
              </div>

              <div className="w-16 text-right truncate">
                <span
                  className="inline-block px-2.5 py-1 text-xs font-medium truncate"
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
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 truncate">
                  <div className="text-sm text-gray-500 font-normal truncate">
                    #{product.id}
                  </div>
                  <div className="text-sm text-gray-700 font-medium truncate max-w-[60vw]">
                    {product.name}
                  </div>
                </div>
                <span
                  className="inline-block px-2.5 py-1 text-xs font-medium truncate"
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

              <div className="space-y-1">
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Popularity
                </div>
                <div className="relative h-[4px] rounded-full overflow-hidden bg-gray-200 w-full">
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
