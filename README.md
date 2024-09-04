# Custom Code Recovery Instructions

This repository contains custom code that enhances your Shopify theme. If a future theme update overwrites the customizations, follow these steps to restore the custom functionality.

## Files in This Repository:

1. `custom-scripts.js` - Custom JavaScript for video functionality (mute/unmute, autoplay, etc.).
2. `media-with-text.liquid` - Modified Liquid template for media sections, enabling additional video controls customization.

## Instructions for Restoring Custom Code After a Theme Update:

### Step 1: Backup Your Theme (Optional but Recommended)

Before making any changes, it's always a good idea to backup your current theme.

1. From your Shopify Admin, go to **Online Store** > **Themes**.
2. In your live theme, click the **Actions** dropdown and select **Duplicate** to create a backup.

### Step 2: Add `custom-scripts.js` to the Assets Folder

1. Download the `custom-scripts.js` file from this repository.
2. In your Shopify Admin, go to **Online Store** > **Themes**.
3. Find your live theme and click **Actions** > **Edit code**.
4. In the **Assets** folder, click **Add a new asset**.
5. Upload the `custom-scripts.js` file.

### Step 3: Add the `media-with-text.liquid` File to the Sections Folder

1. Download the `media-with-text.liquid` file from this repository.
2. In the **Sections** folder, look for the `media-with-text.liquid` file.
3. Replace the existing content of `media-with-text.liquid` with the content from the file you downloaded.
   - This ensures the custom video controls functionality works properly with the JavaScript code.

### Step 4: Ensure `custom-scripts.js` is Linked to Your Theme

To make sure the custom script is loaded:

1. In your Shopify Admin, go to **Online Store** > **Themes** > **Edit code**.
2. In the **layout** folder, open the `theme.liquid` file.
3. Scroll down to the closing `</body>` tag.
4. Just above the closing `</body>` tag, add the following line to include the custom JavaScript file:
   ```html
   <script src="{{ 'custom-scripts.js' | asset_url }}" defer></script>
   ```

### Step 5: Testing the Functionality

Once the files are uploaded and linked:

1. Visit your store's front end and navigate to a page where the media section is used.
2. Ensure the videos autoplay when they come into view and the mute/unmute functionality works as expected.
3. In the Customize mode, you can now toggle the video controls on or off.

### Additional Notes:

In the Customize section of your Shopify Admin, when editing a page, you will now see an option to toggle video controls on or off in the media section. This setting is defaulted to "false" thanks to the `media-with-text.liquid` customization, meaning the controls will not show unless the box it toggled on.
