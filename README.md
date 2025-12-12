# Web Application Skeleton

A modern, production-ready web application skeleton built with React, TypeScript, Tailwind CSS, and Shadcn UI. This template provides a solid foundation for building scalable web applications with best practices for development, testing, and CI/CD already configured.

## 🚀 Features

- **React** with TypeScript for type-safe component development
- **Vite** for lightning-fast development and optimized production builds
- **Tailwind CSS** for utility-first styling
- **Shadcn UI** component library with Radix UI primitives
- **React Router** for client-side routing
- **React Hook Form + Zod** for form handling and validation
- **Vitest** for unit and integration testing
- **Playwright** for end-to-end testing
- **ESLint + Prettier** for code quality and formatting
- **Husky + lint-staged** for pre-commit hooks
- **GitHub Actions CI/CD** pipeline with automated testing and releases

## 📦 Project Structure

```text
├── .github/            # GitHub Actions workflows and Dependabot config
├── .husky/             # Git hooks configuration
├── .vscode/            # VS Code settings and extensions
├── e2e/                # Playwright end-to-end tests
├── public/             # Static assets
├── src/
│   ├── components/     # React components (UI components from Shadcn)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── test/           # Unit/integration tests and test setup
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── index.html          # HTML entry point
├── tailwind.config.ts  # Tailwind CSS configuration
├── vite.config.ts      # Vite and Vitest configuration
└── package.json        # Project dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20 or higher
- npm 9 or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run check` | Run lint and tests together |
| `npm run test` | Run unit/integration tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run E2E tests with Playwright UI |
| `npm run type-check` | Run TypeScript type checking |

---

## 🤖 AI Section

This section describes the commands that AI assistants should run after completing implementations to verify the build, linting, and tests pass.

### Verification Commands

After making any code changes, run the following commands in order to verify everything works correctly:

```bash
# 1. Check TypeScript types (catches type errors without building)
npm run type-check

# 2. Run linting (catches code quality issues)
npm run lint

# 3. Run unit/integration tests
npm run test

# 4. Build the project (verifies production build works)
npm run build
```

**Quick verification (lint + tests combined):**

```bash
npm run check
```

**Full verification including format check:**

```bash
npm run check && npm run format:check
```

### E2E Testing

For changes affecting user-facing functionality, also run E2E tests:

```bash
# Install Playwright browsers (first time only)
npx playwright install chromium

# Run E2E tests
npm run test:e2e
```

### Expected Outcomes

- ✅ All commands should exit with code 0 (success)
- ✅ No TypeScript errors
- ✅ No ESLint warnings or errors
- ✅ All tests passing
- ✅ Build output in `dist/` directory contains `index.html`

---

## 📋 AI Instructions

This section provides guidance for AI assistants working on this codebase. Follow these instructions to maintain code quality and consistency.

### Core Workflow

After completing any implementation, ALWAYS verify your changes by running:

```bash
npm run check && npm run format:check && npm run build
```

If any step fails:
1. Read the error messages carefully
2. Fix the issues
3. Re-run the verification commands
4. Repeat until all checks pass

### Code Quality Requirements

Before considering any task complete, ensure:

1. **TypeScript**: No type errors (`npm run type-check` passes)
2. **Linting**: No ESLint errors (`npm run lint` passes)
3. **Formatting**: Code is properly formatted (`npm run format:check` passes or run `npm run format` to fix)
4. **Tests**: All existing tests pass (`npm run test` passes)
5. **Build**: Production build succeeds (`npm run build` passes)

### Testing Guidelines

#### When to Write Unit Tests

Write unit tests in `src/test/` or co-located with components (e.g., `Component.test.tsx`) for:

- **Utility functions**: Any pure functions in `src/lib/`
- **Custom hooks**: All custom hooks in `src/hooks/`
- **Complex component logic**: Components with significant business logic, state management, or conditional rendering
- **Form validation**: Zod schemas and form handling logic
- **Data transformations**: Any functions that transform or process data

**Unit test file naming**: `*.test.ts` or `*.test.tsx`

**Example structure:**
```typescript
import { describe, it, expect } from 'vitest';

describe('FunctionName', () => {
  it('should handle expected input correctly', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = functionName(input);
    
    // Assert
    expect(result).toBe('expected');
  });

  it('should handle edge cases', () => {
    // Test edge cases
  });
});
```

#### When to Write E2E Tests

Write Playwright E2E tests in `e2e/` for:

- **Critical user flows**: Login, navigation, form submissions
- **Page rendering**: Verifying pages load and display correctly
- **User interactions**: Testing click flows, form fills, navigation
- **Integration points**: Testing features that span multiple components

**E2E test file naming**: `*.spec.ts`

**Example structure:**
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should complete the user flow', async ({ page }) => {
    await page.goto('/');
    
    // Interact with elements
    await page.click('#button-id');
    
    // Assert outcomes
    await expect(page.locator('#result')).toBeVisible();
  });
});
```

#### When NOT to Write Tests

- Simple presentational components with no logic
- Direct re-exports or type definitions
- Trivial implementations where testing provides no value

### Component Development

When creating new components:

1. **Use Shadcn patterns**: Follow existing component patterns in `src/components/ui/`
2. **TypeScript first**: Always define proper TypeScript interfaces/types
3. **Accessibility**: Ensure components are accessible (use Radix UI primitives when possible)
4. **Styling**: Use Tailwind CSS classes; follow the design system

### File Organization

- **Components**: Place in `src/components/` (UI primitives in `src/components/ui/`)
- **Pages**: Place in `src/pages/`
- **Hooks**: Place in `src/hooks/`
- **Utilities**: Place in `src/lib/`
- **Tests**: Co-locate with source files or place in `src/test/`
- **E2E Tests**: Place in `e2e/`

### Import Aliases

Use the `@/` alias for imports from the `src/` directory:

```typescript
// ✅ Good
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ❌ Avoid
import { Button } from '../../../components/ui/button';
```

### Commit Preparation

Before your changes are committed:

1. Run `npm run format` to ensure consistent formatting
2. Husky will automatically run lint-staged on pre-commit
3. Ensure all verification commands pass

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| TypeScript errors | Run `npm run type-check` and fix reported issues |
| ESLint errors | Run `npm run lint:fix` for auto-fixable issues |
| Formatting issues | Run `npm run format` to auto-format |
| Test failures | Read the test output, fix the implementation or update the test |
| Build failures | Check for TypeScript errors first, then review Vite output |
