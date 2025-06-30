import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // "PUSH", "POP", "REPLACE"

  useEffect(() => {
    // Always scroll to top on navigation, even same route clicks
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.search, navigationType]);

  return null;
};

export default ScrollToTop;
