import { execSync } from 'child_process';

export default {
  '*.{ts,tsx}': async (files) => {
    // Run eslint --fix but don't fail if there are unfixable errors
    try {
      execSync(`npx eslint --fix ${files.join(' ')}`, { stdio: 'inherit' });
    } catch (error) {
      // Ignore eslint errors - we just want to apply fixes
      console.log('ESLint found some issues, but continuing with commit...');
    }

    // Always run prettier after eslint
    return `npx prettier --write ${files.join(' ')}`;
  },
  '*.{js,jsx,json}': 'npx prettier --write',
  '*.md': 'npx prettier --write --prose-wrap always',
  '*.{yml,yaml}': 'npx prettier --write',
};
