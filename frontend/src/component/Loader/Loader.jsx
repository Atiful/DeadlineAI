// Loader.jsx
import React, { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const Loader = ({ 
  size = 'medium', 
  color = '#3498db', 
  secondaryColor = '#f3f3f3',
  type = 'pulse',
  text = 'Loading...',
  showText = true,
  textPosition = 'bottom'
}) => {
  const [loaderType, setLoaderType] = useState(type);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  useEffect(() => {
    setLoaderType(type);
  }, [type]);
  
  const sizeClass = styles[size] || styles.medium;
  const textPositionClass = styles[`text-${textPosition}`] || styles['text-bottom'];
  
  const renderLoader = () => {
    switch (loaderType) {
      case 'pulse':
        return (
          <div className={`${styles.pulseContainer} ${sizeClass}`}>
            <div className={styles.pulse} style={{ backgroundColor: color }}></div>
            <div className={styles.pulse} style={{ backgroundColor: color }}></div>
            <div className={styles.pulse} style={{ backgroundColor: color }}></div>
          </div>
        );
      case 'ripple':
        return (
          <div className={`${styles.rippleContainer} ${sizeClass}`}>
            <div className={styles.ripple} style={{ borderColor: color }}></div>
          </div>
        );
      case 'spinner':
        return (
          <div className={`${styles.spinnerContainer} ${sizeClass}`}>
            <div 
              className={styles.spinner} 
              style={{ 
                borderColor: secondaryColor,
                borderTopColor: color
              }}
            ></div>
          </div>
        );
      case 'dots':
        return (
          <div className={`${styles.dotsContainer} ${sizeClass}`}>
            <div className={styles.dot} style={{ backgroundColor: color }}></div>
            <div className={styles.dot} style={{ backgroundColor: color }}></div>
            <div className={styles.dot} style={{ backgroundColor: color }}></div>
            <div className={styles.dot} style={{ backgroundColor: color }}></div>
          </div>
        );
      case 'bars':
        return (
          <div className={`${styles.barsContainer} ${sizeClass}`}>
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={styles.bar} 
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        );
      case 'infinity':
        return (
          <div className={`${styles.infinityContainer} ${sizeClass}`}>
            <div className={styles.infinityShape} style={{ 
              borderColor: color,
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent'
            }}></div>
          </div>
        );
      case 'cube-grid':
        return (
          <div className={`${styles.cubeGridContainer} ${sizeClass}`}>
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={styles.cube} 
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        );
      case 'wave':
        return (
          <div className={`${styles.waveContainer} ${sizeClass}`}>
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={styles.wave} 
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        );
      default:
        return (
          <div className={`${styles.spinnerContainer} ${sizeClass}`}>
            <div 
              className={styles.spinner} 
              style={{ 
                borderColor: secondaryColor,
                borderTopColor: color
              }}
            ></div>
          </div>
        );
    }
  };

  return (
    <div className={`${styles.loaderWrapper} ${mounted ? styles.mounted : ''}`}>
      {renderLoader()}
      {showText && text && (
        <div className={`${styles.loadingText} ${textPositionClass}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Loader;