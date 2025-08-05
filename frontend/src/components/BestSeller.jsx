import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestseller, setBestseller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((item) => item.bestseller);
        setBestseller(bestProducts.slice(0, 5));
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere, fugit alias assumenda aspernatur quos debitis quaerat at, beatae, doloribus odio! Nemo qui et, perspiciatis vitae quia consequuntur sequi ad.
                </p>
            </div>
            {/* Render bestsellers here if needed */}
        </div>
    )
}

export default BestSeller