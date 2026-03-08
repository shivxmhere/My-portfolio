import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Achievements from '../components/Achievements';
import Resume from '../components/Resume';
import GithubActivity from '../components/GithubActivity';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Resume />
      <Projects />
      <Timeline />
      <Achievements />
      <GithubActivity />
      <Contact />
      <Footer />
    </Layout>
  );
}
