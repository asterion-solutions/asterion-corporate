import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CmpProductPage from './components/CmpProductPage';

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cmp" element={<CmpProductPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
