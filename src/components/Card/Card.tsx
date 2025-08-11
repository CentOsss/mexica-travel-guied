import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    className,
  ].join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;

