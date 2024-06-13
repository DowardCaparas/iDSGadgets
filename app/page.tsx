import { Products, Hero, About, Blogs, NavBar } from '@/components';

export default function Home() {

  return (
    <main className="overflow-hidden">

      <NavBar />
      
      <Hero />

      <section>
        <Products />
      </section>

      <section>
        <About />
      </section>
      
      <section>
        <Blogs />
      </section>

    </main>
  );
}
