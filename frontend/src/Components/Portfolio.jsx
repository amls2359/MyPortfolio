
    import Header from './Header.jsx';
    import Hero from './Hero.jsx';
    import About from './About.jsx';
    import Projects from './Project.jsx';
    import Skills from './Skill.jsx';
    import Contact from './Contact.jsx';
    import Footer from './Footer.jsx';
    function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
      <Hero />
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
      </main>
      <Footer />
    </div>
  );
    }
export default Portfolio;
