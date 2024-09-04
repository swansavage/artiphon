# Custom Code Recovery Instructions

This repository contains custom code that enhances your Shopify theme. If a future theme update overwrites the customizations, follow these steps to restore the custom functionality.

## Files in This Repository:

1. `custom-scripts.js` - Custom JavaScript for video functionality (mute/unmute, autoplay, etc.).
2. `media-with-text.liquid` - Modified Liquid template for media sections, enabling additional video controls customization.

## Instructions for Restoring Custom Code After a Theme Update:

### Step 1: Backup Your Theme (Optional but Recommended)

Before making any changes, it's always a good idea to backup your current theme:

1. From your Shopify Admin, go to **Online Store** > **Themes**.
2. In your live theme, click the **Actions** dropdown and select **Duplicate** to create a backup.

### Step 2: Check for Existing `custom-scripts.js` in the Assets Folder

1. In your Shopify Admin, go to **Online Store** > **Themes** > **Actions** > **Edit code**.
2. In the **Assets** folder, check if there is already a file named `custom-scripts.js`.
   - If it exists, click on it and go to Step 3.
   - If it doesn't exist, proceed to the next step to create it.

### Step 3: Add or Update `custom-scripts.js` in the Assets Folder

1. If `custom-scripts.js` does not already exist, click **Add a new asset**.
2. In the popup, select **Create a blank file**, name it `custom-scripts.js`, and click **Add asset**.
3. Copy the code from the `custom-scripts.js` file in this repository.
4. Paste the code into the `custom-scripts.js` file in your Shopify Admin and click **Save**.

### Step 4: Update the `media-with-text.liquid` File in the Sections Folder

1. In your Shopify Admin, go to **Online Store** > **Themes** > **Edit code**.
2. In the **Sections** folder, find the `media-with-text.liquid` file.
3. Copy the entire code from the `media-with-text.liquid` file in this repository.
4. Paste the copied code into the `media-with-text.liquid` file in your Shopify Admin, replacing any existing code, then click **Save**.

### Step 5: Link the `custom-scripts.js` File to Your Theme

1. In your Shopify Admin, go to **Online Store** > **Themes** > **Edit code**.
2. In the **layout** folder, open the `theme.liquid` file.
3. Scroll down to just above the closing `</body>` tag.
4. Add this line of code to ensure the custom script is loaded:
   ```html
   <script src="{{ 'custom-scripts.js' | asset_url }}" defer></script>
   ```
5. Click **Save**.

### Step 6: Test the Custom Code

1. Visit your store and navigate to a page where the media section is used.
2. Verify that videos autoplay and the mute/unmute functionality works correctly.
3. In the Shopify Customize editor, you should now see options to toggle video controls on or off.

### Additional Information:

The customization to the `media-with-text.liquid` file allows you to toggle video controls directly in Shopify’s Customize mode. This functionality won't be affected by theme updates, but ensure you follow these steps whenever there is a theme update to recover any overwritten custom code.
