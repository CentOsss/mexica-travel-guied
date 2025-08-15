import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { useBlogList } from '@docusaurus/theme-common/internal';
import styles from './RelatedPosts.module.css';

interface RelatedPost {
  title: string;
  description: string;
  date: string;
  permalink: string;
  tags: string[];
}

interface RelatedPostsProps {
  currentTags?: string[];
  maxPosts?: number;
}

export default function RelatedPosts({ 
  currentTags = [], 
  maxPosts = 3 
}: RelatedPostsProps): JSX.Element | null {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = useBlogPost();
  const { items: allPosts } = useBlogList();

  // Фильтруем посты, исключая текущий
  const filteredPosts = allPosts
    .filter(post => post.permalink !== metadata.permalink)
    .filter(post => post.metadata.tags && post.metadata.tags.length > 0);

  // Сортируем по релевантности (количество общих тегов)
  const postsWithRelevance = filteredPosts.map(post => {
    const commonTags = post.metadata.tags?.filter(tag => 
      currentTags.includes(tag.label)
    ) || [];
    
    return {
      ...post,
      relevance: commonTags.length,
      commonTags
    };
  });

  // Сортируем по релевантности и берем топ посты
  const relatedPosts = postsWithRelevance
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxPosts)
    .filter(post => post.relevance > 0);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className={styles.relatedPosts}>
      <h3 className={styles.title}>Похожие статьи</h3>
      <div className={styles.postsGrid}>
        {relatedPosts.map((post) => (
          <article key={post.permalink} className={styles.postCard}>
            <Link to={post.permalink} className={styles.postLink}>
              <div className={styles.postContent}>
                <h4 className={styles.postTitle}>{post.metadata.title}</h4>
                <p className={styles.postDescription}>
                  {post.metadata.description}
                </p>
                <div className={styles.postMeta}>
                  <time className={styles.postDate}>
                    {new Date(post.metadata.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.commonTags.length > 0 && (
                    <div className={styles.postTags}>
                      {post.commonTags.slice(0, 2).map(tag => (
                        <span key={tag.label} className={styles.tag}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
