import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import { DarkModeProvider } from './hooks/useDarkMode';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </DarkModeProvider>
  );
}

export default App;