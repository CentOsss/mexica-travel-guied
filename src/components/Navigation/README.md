# Navigation Component

A responsive navigation bar with dropdown support.

## Usage

```tsx
import Navigation from './Navigation';

const navItems = [
  { label: 'Home', to: '/' },
  { 
    label: 'About', 
    to: '/about',
    items: [
      { label: 'Our Story', to: '/about/story' },
      { label: 'Team', to: '/about/team' },
    ],
  },
];

<Navigation items={navItems} />
```

## Props

- `items`: `NavItem[]` - An array of navigation items.
  - `NavItem`:
    - `label`: `string` - The text to display.
    - `to`: `string` - The link destination.
    - `items`: `NavItem[]` - (Optional) An array of sub-items for a dropdown menu.

