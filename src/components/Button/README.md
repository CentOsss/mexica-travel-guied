# Button Component

A customizable button component.

## Usage

```tsx
import Button from './Button';

<Button variant="primary" size="large" onClick={() => alert('Clicked!')}>
  Click Me
</Button>
```

## Props

- `children`: `React.ReactNode` - The content of the button.
- `onClick`: `() => void` - (Optional) Function to call when the button is clicked.
- `variant`: `'primary' | 'secondary' | 'outline'` - (Optional) The style of the button. Defaults to `primary`.
- `size`: `'small' | 'medium' | 'large'` - (Optional) The size of the button. Defaults to `medium`.
- `type`: `'button' | 'submit' | 'reset'` - (Optional) The type of the button. Defaults to `button`.

