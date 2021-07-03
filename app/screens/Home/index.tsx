import PublicLayout from '@components/PublicLayout';
import Hero from './components/Hero';
import Schools from './components/Schools';

function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Schools />
    </PublicLayout>
  );
}

export default Home;
