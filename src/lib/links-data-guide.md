# Links Data Guide

This guide explains how to update the content on the Links page by editing the `links-data.json` file.

## Overview

The Links page pulls all its content from the `src/lib/links-data.json` file. You can update this file to add, modify, or remove items without having to edit any React code.

## Important Note About JSON

**JSON does not support comments.** While this guide includes examples with comments for clarity, do not include comments in the actual JSON file. Comments in JSON will cause parsing errors.

## File Structure

The JSON file has the following structure:

```json
{
  "recommendations": {
    "categories": [
      {
        "id": "category-id",
        "title": "Category Title",
        "icon": "IconName",
        "items": [
          {
            "title": "Item Title",
            "description": "Item description",
            "url": "https://example.com/link",
            "icon": "IconName",
            "tags": ["Tag1", "Tag2"]
          }
        ]
      }
    ]
  },
  "tools": {
    "categories": [
      // Similar structure to recommendations (NOTE: This comment is for documentation only - don't include comments in the actual JSON file)
    ]
  },
  "affiliateDisclosure": {
    "title": "Disclosure Title",
    "content": "Disclosure content"
  }
}
```

## How to Update

### Adding a New Item

1. Find the appropriate category in either the "recommendations" or "tools" section
2. Copy an existing item in the "items" array
3. Modify the properties (title, description, url, icon, tags)
4. Save the file

Example:

```json
"items": [
  {
    "title": "New Book Title",
    "description": "Description of the book",
    "url": "https://amzn.to/your-affiliate-link",
    "icon": "Book",
    "tags": ["Fiction", "Mystery", "Bestseller"]
  }
]
```

### Adding a New Category

1. Copy an existing category object
2. Change the "id" to a unique identifier (use kebab-case: lowercase with hyphens)
3. Update the "title" and "icon"
4. Add your items to the "items" array
5. Save the file

Example:

```json
{
  "id": "cooking-books",
  "title": "Cooking & Recipes",
  "icon": "Utensils",
  "items": [
    {
      "title": "Cookbook Title",
      "description": "Description of the cookbook",
      "url": "https://amzn.to/your-affiliate-link",
      "icon": "Book",
      "tags": ["Cooking", "Recipes", "Vegan"]
    }
  ]
}
```

### Updating the Affiliate Disclosure

1. Edit the "title" or "content" in the "affiliateDisclosure" object
2. Save the file

## Available Icons

The icons used in the Links page come from the Lucide React library. You can find the available icons at [https://lucide.dev/icons/](https://lucide.dev/icons/).

When specifying an icon, use the exact name from the Lucide library (e.g., "Book", "Heart", "Coffee").

## Important Notes

1. Make sure your JSON is valid - all quotes must be double quotes, and all properties must have values
2. The "url" property should be a valid URL (including the http:// or https:// prefix)
3. The "tags" property is optional, but if included, it must be an array of strings
4. After saving the file, the changes will automatically appear on the Links page when you refresh the browser
5. Remember that JSON does not support comments - any comments will cause parsing errors
