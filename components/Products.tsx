
import ProductCard from './ProductCard';
import FeaturedProducts from './FeaturedProducts';
import { gadgets, products } from '@/constants';

const Products = () => {
  return (
    <section className='w-full min-h-screen padding' id='products'>
        <div>
            <ProductCard products={products} />
            <FeaturedProducts gadgets={gadgets}/>
        </div>
    </section>
  );
};

export default Products;