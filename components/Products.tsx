
import ProductCard from './ProductCard';
import FeaturedProducts from './FeaturedProducts';

const Products = () => {
  return (
    <section className='w-full padding' id='products'>
        <div>
            <ProductCard />
            <FeaturedProducts />
        </div>
    </section>
  );
};

export default Products;