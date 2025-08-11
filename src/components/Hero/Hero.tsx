import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}) => {
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div className={styles.hero} style={heroStyle}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {ctaText && ctaLink && (
          <a href={ctaLink}>
            <Button variant="primary" size="large">
              {ctaText}
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;

