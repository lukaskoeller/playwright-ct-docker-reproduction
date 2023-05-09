import { test, expect } from '@playwright/experimental-ct-react';
import { Image } from './Image';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Image', () => {
  test('should display image correctly', async ({ mount }) => {
    const component = await mount(<Image />);

    await expect(component).toHaveScreenshot();
  });
});