
import ProductCard from './ProductCard';
import FeaturedProducts from './FeaturedProducts';

const Products = () => {
  return (
        <div id='products' className='w-full container__padding'>
            <ProductCard />
            <FeaturedProducts />
        </div>

  );
};

export default Products;