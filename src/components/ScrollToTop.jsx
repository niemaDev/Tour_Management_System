import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset the main window
    window.scrollTo(0, 0);

    // 2. Reset the body and document
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    // 3. Reset any scrollable layout containers (Common in MainLayout)
    const mainContent = document.querySelector('main') || document.querySelector('.overflow-y-auto');
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;