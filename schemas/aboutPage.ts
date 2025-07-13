import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Section',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'nilsBio',
      title: 'Nils Bio',
      type: 'blockContent',
      description: 'Rich text content for Nils biography',
    }),
    defineField({
      name: 'thuanBio',
      title: 'Thuan Bio',
      type: 'blockContent',
      description: 'Rich text content for Thuan biography',
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Title',
      type: 'string',
    }),
    defineField({
      name: 'philosophyText',
      title: 'Philosophy Text',
      type: 'blockContent',
      description: 'Rich text content for the philosophy section',
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
      title: 'philosophyTitle' 
    },
    prepare(selection) {
      return {
        title: selection.title || 'About Section',
      }
    },
  }
})