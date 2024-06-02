import { Products, Hero, About, Blogs} from '@/components';
import { blogs } from '@/constants';

export default function Home() {

  return (
    <main className="overflow-hidden">
      
      <Hero />
      <Products />
      <About />
      <Blogs blogs={blogs}/>
      
    </main>
  );
}
