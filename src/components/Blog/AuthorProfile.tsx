import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import styles from './AuthorProfile.module.css';

interface AuthorProfileProps {
  className?: string;
  showSocials?: boolean;
}

export default function AuthorProfile({ 
  className = '',
  showSocials = true 
}: AuthorProfileProps): JSX.Element | null {
  const { metadata } = useBlogPost();
  const { siteConfig } = useDocusaurusContext();

  if (!metadata.authors || metadata.authors.length === 0) {
    return null;
  }

  const author = metadata.authors[0]; // Берем первого автора

  if (!author) {
    return null;
  }

  return (
    <div className={`${styles.authorProfile} ${className}`}>
      <div className={styles.authorHeader}>
        <h3 className={styles.title}>Об авторе</h3>
      </div>
      
      <div className={styles.authorContent}>
        <div className={styles.authorAvatar}>
          {author.imageURL ? (
            <img 
              src={author.imageURL} 
              alt={author.name}
              className={styles.avatar}
            />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {author.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className={styles.authorInfo}>
          <h4 className={styles.authorName}>{author.name}</h4>
          {author.title && (
            <p className={styles.authorTitle}>{author.title}</p>
          )}
          {author.description && (
            <p className={styles.authorDescription}>{author.description}</p>
          )}
          
          {showSocials && author.socials && (
            <div className={styles.authorSocials}>
              {author.socials.instagram && (
                <Link 
                  to={`https://instagram.com/${author.socials.instagram}`}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>📷</span>
                  Instagram
                </Link>
              )}
              
              {author.socials.youtube && (
                <Link 
                  to={`https://youtube.com/${author.socials.youtube}`}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>📺</span>
                  YouTube
                </Link>
              )}
              
              {author.socials.telegram && (
                <Link 
                  to={`https://t.me/${author.socials.telegram}`}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>✈️</span>
                  Telegram
                </Link>
              )}
            </div>
          )}
          
          {author.page && (
            <Link 
              to={`/blog/authors/${author.key}`}
              className={styles.authorPageLink}
            >
              Все статьи автора →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
