import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // prevent create/delete
  fields: [
    // Site Identity
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Main site title displayed in header.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'siteSubtitle',
      title: 'Site Subtitle',
      type: 'string',
      description: 'Subtitle displayed under the main title.',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Meta description for SEO.',
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      description: 'Site logo (optional - leave empty to use text logo)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Used for social sharing previews.',
      options: {
        hotspot: true,
      },
    }),
    
    // Header Configuration
    defineField({
      name: 'headerStyle',
      title: 'Header Style',
      type: 'string',
      options: {
        list: [
          { title: 'Minimal', value: 'minimal' },
          { title: 'Glass Morphism', value: 'glass' },
          { title: 'Japanese Zen', value: 'zen' },
          { title: 'Sophisticated', value: 'sophisticated' },
        ],
        layout: 'radio',
      },
      initialValue: 'zen',
    }),
    defineField({
      name: 'headerBackground',
      title: 'Header Background',
      type: 'string',
      options: {
        list: [
          { title: 'Transparent', value: 'transparent' },
          { title: 'Glass Blur', value: 'glass' },
          { title: 'Solid', value: 'solid' },
          { title: 'Gradient', value: 'gradient' },
        ],
        layout: 'radio',
      },
      initialValue: 'glass',
    }),
    defineField({
      name: 'showPageTitle',
      title: 'Show Page Title in Header',
      type: 'boolean',
      description: 'Display the current page title in the header center.',
      initialValue: true,
    }),
    
    // Navigation
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'href',
            title: 'URL',
            type: 'string',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Lucide icon name (e.g., "home", "book-open", "user")',
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            description: 'Brief description for tooltips and accessibility.',
          }),
          defineField({
            name: 'showInHeader',
            title: 'Show in Header',
            type: 'boolean',
            description: 'Display this link in the main header navigation.',
            initialValue: true,
          }),
          defineField({
            name: 'showInFooter',
            title: 'Show in Footer',
            type: 'boolean',
            description: 'Display this link in the footer navigation.',
            initialValue: true,
          }),
        ],
        preview: {
          select: { 
            title: 'title', 
            subtitle: 'href' 
          }
        }
      }]
    }),
    
    // Page Titles
    defineField({
      name: 'pageTitles',
      title: 'Page Titles',
      type: 'array',
      description: 'Custom titles for different pages.',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'path',
            title: 'Page Path',
            type: 'string',
            description: 'e.g., "/about", "/contact", "/blog"',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'Title displayed in header for this page.',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'subtitle',
            title: 'Page Subtitle',
            type: 'string',
            description: 'Optional subtitle for this page.',
          }),
        ],
        preview: {
          select: { 
            title: 'path', 
            subtitle: 'title' 
          }
        }
      }]
    }),
    
    // Social Links
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Lucide icon name for this platform.',
          }),
        ],
        preview: {
          select: { 
            title: 'platform', 
            subtitle: 'url' 
          }
        }
      }],
    }),
    
    // Footer
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
    
    // Japanese Design Settings
    defineField({
      name: 'japaneseDesign',
      title: 'Japanese Design Settings',
      type: 'object',
      description: 'Settings for Japanese aesthetic principles.',
      fields: [
        defineField({
          name: 'enableZenMode',
          title: 'Enable Zen Mode',
          type: 'boolean',
          description: 'Apply minimal Japanese design principles.',
          initialValue: true,
        }),
        defineField({
          name: 'colorTheme',
          title: 'Color Theme',
          type: 'string',
          options: {
            list: [
              { title: 'Sumi (Ink)', value: 'sumi' },
              { title: 'Shiro (Paper)', value: 'shiro' },
              { title: 'Cha (Tea)', value: 'cha' },
              { title: 'Mizu (Water)', value: 'mizu' },
              { title: 'Mori (Forest)', value: 'mori' },
            ],
            layout: 'radio',
          },
          initialValue: 'sumi',
        }),
        defineField({
          name: 'emphasizeMa',
          title: 'Emphasize Ma (Negative Space)',
          type: 'boolean',
          description: 'Increase whitespace for breathing room.',
          initialValue: true,
        }),
        defineField({
          name: 'subtleAnimations',
          title: 'Subtle Animations',
          type: 'boolean',
          description: 'Use gentle, natural animations.',
          initialValue: true,
        }),
      ],
    }),
  ],
  preview: {
    select: { 
      title: 'siteTitle',
      subtitle: 'siteSubtitle'
    }
  }
})