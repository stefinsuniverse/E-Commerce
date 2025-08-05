import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';



const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0-10)); // Last 8 products
  }, [products]);

  return (
    <div className="my-10">
      <div className='text-center py-8 text-3xl'>
        <Title text1="Latest" text2="Collection" />
        <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quibusdam dicta assumenda laudantium numquam eligendi veritatis quam rem corporis! Sed, quas. Nam quo illo vitae, eius voluptates consectetur necessitatibus possimus.
        </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
        latestProducts.map((item, index) => (
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
