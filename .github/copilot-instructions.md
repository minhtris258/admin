# GitHub Copilot Instructions for Admin Dashboard

## Project Overview

This is a React-based admin dashboard application built with Vite. The application features a modern, responsive UI for managing hotel/room bookings with data visualization capabilities.

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Routing**: React Router DOM 7.9.6
- **Styling**: Tailwind CSS 4.1.17
- **Charts**: Chart.js via react-chartjs-2
- **Icons**: React Icons 5.5.0
- **Linter**: ESLint 9.39.1

## Code Style and Conventions

### JavaScript/React

- Use functional components with hooks (no class components)
- Use `memo` for performance optimization where appropriate
- Follow React hooks best practices
- Use arrow functions for component definitions
- Use destructuring for props and imports
- Prefer `const` over `let`, avoid `var`

### File Structure

- Components should be placed in `src/components/`
- Pages should be placed in `src/pages/`
- Use descriptive file names matching component names
- Use `.jsx` extension for React components
- Use `.js` extension for utility files and configs

### Styling

- Use Tailwind CSS utility classes for styling
- Prefer composition of utility classes over custom CSS
- Use responsive design classes (sm:, md:, lg:, xl:)
- Follow the existing gradient and hover effect patterns
- Maintain consistent spacing using Tailwind's spacing scale

### Naming Conventions

- **Components**: PascalCase (e.g., `Dashboard`, `StatCard`, `AdminLayout`)
- **Files**: PascalCase for component files (e.g., `Dashboard.jsx`)
- **Functions/Variables**: camelCase (e.g., `chartOptions`, `roomsData`)
- **Constants**: UPPER_SNAKE_CASE for true constants

## Language Considerations

- **UI Text**: Vietnamese (tiếng Việt) is used for user-facing text
- **Code**: English for variable names, function names, and comments
- When adding new features with UI text, use Vietnamese for labels, messages, and content
- Maintain consistent Vietnamese terminology with existing code

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Linting and Code Quality

- Follow ESLint configuration in `eslint.config.js`
- Run `npm run lint` before committing
- Fix linting errors before submitting changes
- Unused variables should match pattern `^[A-Z_]` to be ignored

## Component Patterns

### Memoization

Use `React.memo()` for components that render frequently with the same props:

```javascript
const StatCard = memo(({ title, value, change, gradient, Icon }) => {
  // Component code
});

StatCard.displayName = 'StatCard';
```

### Icon Usage

Import icons from `react-icons/fi` (Feather Icons):

```javascript
import { FiDollarSign, FiEye } from "react-icons/fi";
```

### Chart.js Setup

Register required Chart.js components before use:

```javascript
import { Chart as ChartJS, CategoryScale, LinearScale, ... } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ...);
```

## Best Practices

1. **Performance**: Use memo, useMemo, and useCallback appropriately
2. **Accessibility**: Include proper ARIA labels and semantic HTML
3. **Responsiveness**: Test on mobile, tablet, and desktop viewports
4. **Code Organization**: Keep components focused and single-responsibility
5. **State Management**: Use React hooks for local state
6. **Props Validation**: Ensure proper prop types and defaults
7. **Error Handling**: Handle edge cases and loading states

## When Making Changes

- Ensure changes are backwards compatible
- Test in development mode before building
- Verify responsive design on different screen sizes
- Maintain existing color schemes and design patterns
- Keep Vietnamese translations consistent
- Update related documentation if needed
