import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // prevent create/delete - singleton
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline for the hero section',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'subhead',
      title: 'Sub-headline',
      type: 'text',
      description: 'Supporting text below the headline',
      rows: 3,
      validation: Rule => Rule.max(300),
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
      description: 'Text for the main action button',
      placeholder: 'e.g., "Explore My Work", "Get In Touch"',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call-to-Action Link',
      type: 'string',
      description: 'Internal link (e.g., "/about") or external URL',
      placeholder: 'e.g., "/about", "https://linkedin.com/in/..."',
    }),
    defineField({
      name: 'ctaStyle',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Blue)', value: 'primary' },
          { title: 'Secondary (White)', value: 'secondary' },
          { title: 'Glass Effect', value: 'glass' },
          { title: 'Minimal', value: 'minimal' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Hero background image - should be high quality and at least 1920x1080',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundOverlay',
      title: 'Background Overlay',
      type: 'object',
      description: 'Overlay settings for better text readability',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Overlay',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'opacity',
          title: 'Overlay Opacity',
          type: 'number',
          description: 'Opacity from 0 (transparent) to 1 (opaque)',
          validation: Rule => Rule.min(0).max(1),
          initialValue: 0.4,
        }),
        defineField({
          name: 'color',
          title: 'Overlay Color',
          type: 'string',
          options: {
            list: [
              { title: 'Black', value: 'black' },
              { title: 'Dark Blue', value: 'blue' },
              { title: 'Dark Gray', value: 'gray' },
              { title: 'Custom', value: 'custom' },
            ],
          },
          initialValue: 'black',
        }),
      ],
    }),
    defineField({
      name: 'textAlignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
    }),
    defineField({
      name: 'showAuthors',
      title: 'Show Author Avatars',
      type: 'boolean',
      description: 'Display author profile images in the hero section',
      initialValue: true,
    }),
    defineField({
      name: 'heroHeight',
      title: 'Hero Height',
      type: 'string',
      options: {
        list: [
          { title: 'Full Screen', value: 'screen' },
          { title: 'Large (600px)', value: 'large' },
          { title: 'Medium (400px)', value: 'medium' },
          { title: 'Small (300px)', value: 'small' },
        ],
        layout: 'radio',
      },
      initialValue: 'large',
    }),
    defineField({
      name: 'japaneseDesign',
      title: 'Japanese Design Elements',
      type: 'object',
      description: 'Apply Japanese aesthetic principles to the hero',
      fields: [
        defineField({
          name: 'enableZen',
          title: 'Enable Zen Mode',
          type: 'boolean',
          description: 'Apply minimalist Japanese design principles',
          initialValue: false,
        }),
        defineField({
          name: 'emphasizeMa',
          title: 'Emphasize Ma (Negative Space)',
          type: 'boolean',
          description: 'Increase whitespace and breathing room',
          initialValue: false,
        }),
        defineField({
          name: 'subtleAnimations',
          title: 'Subtle Animations',
          type: 'boolean',
          description: 'Use gentle, natural entrance animations',
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      description: 'Search engine optimization settings',
      fields: [
        defineField({
          name: 'altText',
          title: 'Background Image Alt Text',
          type: 'string',
          description: 'Descriptive alt text for the background image',
        }),
        defineField({
          name: 'priority',
          title: 'Page Priority',
          type: 'boolean',
          description: 'Mark this as a high-priority page for search engines',
          initialValue: true,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subhead',
      media: 'backgroundImage',
    },
  },
})