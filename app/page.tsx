import { Products, Hero, About, Blogs} from '@/components';

export default function Home() {

  return (
    <main className="overflow-hidden">
      
      <Hero />
      <Products />
      <About />
      <Blogs />
      
    </main>
  );
}
