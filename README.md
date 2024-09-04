# Custom Scripts and Code for Your Shopify Store

Welcome! This repository contains all the custom code files and snippets used on your Shopify store. These are important for maintaining custom functionality, such as custom JavaScript features, that might get removed or overwritten during theme updates.

## Why Do You Need This?

When your Shopify theme gets updated, any custom changes like these scripts or snippets may be lost. This repository ensures that you can recover and re-install the custom functionality easily without having to rewrite the code.

---

## How to Re-Install Custom Code After a Theme Update

Follow these steps whenever your theme is updated and you need to re-install custom code:

### 1. Access Your Shopify Admin Panel

1. Log in to your Shopify admin.
2. In the sidebar, go to **Online Store > Themes**.

### 2. Open the Theme Code Editor

1. On the Themes page, find your current theme and click the **Actions** dropdown.
2. Select **Edit Code**.

### 3. Add the Custom JavaScript

1. In the list of theme files, look for a file named **custom-scripts.js**. If it doesn’t exist, create a new file:
   - Scroll to the **Assets** folder.
   - Click **Add a new asset**.
   - Select **Create a blank file** and name it `custom-scripts.js`.
2. Copy the content from the `custom-scripts.js` file in this repository.
3. Paste the code into the `custom-scripts.js` file in your Shopify theme.
4. Save the file.

### 4. Link the JavaScript File

1. Scroll to the **layout/theme.liquid** file in the code editor.
2. Look for the `</body>` tag towards the end of the file.
3. Just before the `</body>` tag, add the following line to link your custom JavaScript:

   ```html
   <script src="{{ 'custom-scripts.js' | asset_url }}"></script>
   ```

4. Save the changes to the theme.liquid file.

### 5. Test Your Site

Once you’ve completed the steps above:

1. Go to your store’s front end and check if the custom functionality is working properly (e.g., video mute/unmute behavior).
2. If something isn’t working as expected, double-check that the code is correctly added to the right files.
