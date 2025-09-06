import React from 'react';

const TopProductsComponent = () => {
  const products = [
    {
      id: '01',
      name: 'Home Decor Range',
      popularity: 45,
      sales: 45,
      color: '#3B82F6', // Blue
      lightColor: '#DBEAFE'
    },
    {
      id: '02',
      name: 'Disney Princess Pink Bag 18\'',
      popularity: 29,
      sales: 29,
      color: '#10B981', // Green
      lightColor: '#D1FAE5'
    },
    {
      id: '03',
      name: 'Bathroom Essentials',
      popularity: 18,
      sales: 18,
      color: '#8B5CF6', // Purple
      lightColor: '#EDE9FE'
    },
    {
      id: '04',
      name: 'Apple Smartwatches',
      popularity: 25,
      sales: 25,
      color: '#F59E0B', // Orange
      lightColor: '#FEF3C7'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-box border border-gray-100 w-[645px] h-[351px]">
      {/* Header */}
      <h2  className=" text-xl font-semibold subtitle mb-8">Top Products</h2>
      
      {/* Table Header */}
      <div className="flex items-center mb-4 text-xs text-gray-400 font-medium uppercase tracking-wide">
        <div className="w-12 text-left">#</div>
        <div className="flex-1 text-left">Name</div>
        <div className="w-40 text-left">Popularity</div>
        <div className="w-16 text-right">Sales</div>
      </div>

      {/* Product Rows */}
      <div className="divide-y divide-gray-100">
        {products.map((product) => (
          <div key={product.id} className="flex items-center py-4">
            {/* Index */}
            <div className="w-12 text-sm text-gray-500 font-normal">
              {product.id}
            </div>
            
            {/* Product Name */}
            <div className="flex-1 text-sm text-gray-700 font-normal">
              {product.name}
            </div>
            
            {/* Popularity Bar */}
            <div className="w-[180px] pr-4">
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
                className="inline-block px-2.5 py-1  text-xs font-medium"
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
        ))}
      </div>
    </div>
  );
};

export default TopProductsComponent;