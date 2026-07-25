import { useState, useEffect } from 'react';

function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(() => setVisible(false), 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fadeOut ? 'preloader-fade' : ''}`}>
      <div className="preloader-ring-wrapper">
        <svg className="preloader-ring" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" className="preloader-ring-bg" />
          <circle cx="60" cy="60" r="52" className="preloader-ring-fg" />
        </svg>
        <span className="preloader-initials">NS</span>
      </div>
      <p className="preloader-text">Nalantamil S</p>
    </div>
  );
}

export default Preloader;