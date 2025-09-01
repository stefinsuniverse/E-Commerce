import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  const productId = id ?? '';

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${productId}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem