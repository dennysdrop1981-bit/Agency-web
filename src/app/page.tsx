import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
import UseCases from '../components/UseCases';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <UseCases />
        <FooterCTA />
      </main>
    </>
  );
}
