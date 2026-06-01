import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  const scrolled = isScrolled || !isHome;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-5xl h-[52px] flex items-center justify-between pl-5 pr-1.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/[0.04]'
              : 'bg-black/40 dark:bg-black/50 backdrop-blur-md border border-white/[0.12]'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className={`text-[17px] font-bold tracking-tight shrink-0 ${
              scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}
          >
            Ima<span className="text-primary">Pho</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? scrolled
                        ? 'text-primary bg-primary/10'
                        : 'text-white bg-white/15'
                      : scrolled
                      ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 border border-black/[0.08] dark:border-white/[0.08]'
                  : 'text-white/70 hover:text-white hover:bg-white/10 border border-white/15'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className="h-9 px-4 rounded-full bg-primary hover:bg-primary/90 active:scale-95 text-white text-[13px] font-medium transition-all duration-200">
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              scrolled
                ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </motion.nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-gray-950 z-50 md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-black/[0.06] dark:border-white/[0.06]">
                <span className="text-[17px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Ima<span className="text-primary">Pho</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-3 py-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] px-4 py-2.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'text-primary bg-primary/10 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-5 pb-8 flex items-center gap-3">
                <button
                  onClick={toggleDarkMode}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-black/[0.08] dark:border-white/[0.08] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button className="flex-1 h-10 rounded-full bg-primary hover:bg-primary/90 text-white text-[14px] font-medium transition-all duration-200">
                  Get started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;