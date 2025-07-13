import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        }
      ]
    }),
    defineField({
      name: 'welcomeTitle',
      title: 'Welcome Title',
      type: 'string',
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'blockContent',
    }),
    // SEO
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for search engines',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for search engines',
      rows: 3,
      validation: Rule => Rule.max(160),
    }),
  ],
  preview: {
    select: { 
      title: 'heroHeadline', 
      media: 'heroImage' 
    }
  }
})