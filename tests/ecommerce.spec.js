const { test, expect } = require('@playwright/test');

test('User can login, add item to cart and checkout', async ({ page }) => {
  // 1. Navigate to the demo shop
  await page.goto('https://www.saucedemo.com/');

  // 2. Fill in login credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Verify we landed on the inventory page
  await expect(page).toHaveURL(/.*inventory.html/);

  // 4. Add the first item to the cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // 5. Go to the cart and verify the item is there
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item .inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // 6. Proceed to checkout and fill out information
  await page.click('[data-test="checkout"]');

  // Use the correct attributes (firstName, lastName, postalCode)
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');

  await page.click('[data-test="continue"]');

  // 7. Finish checkout and verify success message
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});