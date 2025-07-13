import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // prevent create/delete
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Displayed in the header and <title> tag.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Meta description for SEO.',
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
        ],
        preview: {
          select: { 
            title: 'title', 
            subtitle: 'href' 
          }
        }
      }]
    }),
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
        ],
        preview: {
          select: { 
            title: 'platform', 
            subtitle: 'url' 
          }
        }
      }],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
  ],
  preview: {
    select: { 
      title: 'siteTitle' 
    }
  }
})