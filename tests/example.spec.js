import { test, expect } from '@playwright/test';

test('Index', async ({ page }) => {
  await page.goto('http://localhost:5082/');

  await expect(page).toHaveTitle(/Home page - WebApplicationForTestPullRequest/);

  await expect(page.locator('h1')).toBeVisible();
});