import PublicLayout from '~components/PublicLayout';
import Hero from './components/Hero';
import Schools from './components/Schools';
import Featured from './components/Featured';

function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Schools />
      <Featured />
    </PublicLayout>
  );
}

export default Home;
