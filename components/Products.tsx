
import ProductCard from './ProductCard';
import FeaturedProducts from './FeaturedProducts';

const Products = () => {
  return (
    <section className='w-full min-h-screen padding' id='products'>
        <div>
            <ProductCard />
            <FeaturedProducts />
        </div>
    </section>
  );
};

export default Products;