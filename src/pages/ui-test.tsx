import React from 'react';
import Layout from '@theme/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Tours', to: '/tours' },
  {
    label: 'About',
    to: '/about',
    items: [
      { label: 'Our Story', to: '/about/story' },
      { label: 'Team', to: '/about/team' },
    ],
  },
];

function UITestPage() {
  return (
    <Layout title="UI Component Test">
      <Hero
        title="Welcome to the UI Test Page"
        subtitle="Here you can see all the new components in action."
      />
      <div style={{ padding: '2rem' }}>
        <h2>Navigation</h2>
        <Navigation items={navItems} />

        <h2 style={{ marginTop: '2rem' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>

        <h2 style={{ marginTop: '2rem' }}>Cards</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card>
            <h3>Default Card</h3>
            <p>This is a default card component.</p>
          </Card>
          <Card variant="elevated">
            <h3>Elevated Card</h3>
            <p>This card has a stronger shadow.</p>
          </Card>
          <Card variant="bordered">
            <h3>Bordered Card</h3>
            <p>This card has a visible border.</p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default UITestPage;

