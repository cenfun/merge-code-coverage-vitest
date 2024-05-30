import { test, expect } from './fixtures.js';

test('test foo', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page.evaluate(() => {
        const { foo } = window.myPackageName;
        foo();
    });

    expect(1).toBe(1);
});

test('test bar', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page.evaluate(() => {
        const { bar } = window.myPackageName;
        bar();
    });


});
