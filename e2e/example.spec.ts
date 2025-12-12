import { test, expect } from '@playwright/test';

test.describe('Application', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');

    // Expect the page title to match
    await expect(page).toHaveTitle(/New Project Base/);
  });

  test('loads the main page successfully', async ({ page }) => {
    const response = await page.goto('/');

    // Expect successful response
    expect(response?.status()).toBe(200);
  });

  test('renders the root element', async ({ page }) => {
    await page.goto('/');

    // Expect the root element to be present
    const root = page.locator('#root');
    await expect(root).toBeVisible();
  });
});
