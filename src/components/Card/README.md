# Card Component

A flexible content container.

## Usage

```tsx
import Card from './Card';

<Card variant="elevated">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

## Props

- `children`: `React.ReactNode` - The content of the card.
- `variant`: `'default' | 'elevated' | 'bordered'` - (Optional) The style of the card. Defaults to `default`.
- `className`: `string` - (Optional) Additional CSS classes to apply to the card.

