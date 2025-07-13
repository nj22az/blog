import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'headerDescription',
      title: 'Header Description',
      type: 'blockContent',
      description: 'Rich text content for the contact page header',
    }),
    defineField({
      name: 'contactMethods',
      title: 'Contact Methods',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            description: 'Contact method type (e.g., "Direct Message", "LinkedIn")',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'value',
            title: 'Value',
            type: 'string',
            description: 'Contact method value (URL, email, etc.)',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Icon name for this contact method',
          }),
          defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Display order (lower numbers appear first)',
            initialValue: 0,
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short description of this contact method',
            rows: 2,
          }),
          defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            description: 'Longer content/explanation for this contact method',
            rows: 4,
          }),
          defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'Text for the action button',
          }),
        ],
        preview: {
          select: { 
            title: 'type', 
            subtitle: 'value' 
          }
        }
      }]
    }),
    defineField({
      name: 'responseCommitmentTitle',
      title: 'Response Commitment Title',
      type: 'string',
    }),
    defineField({
      name: 'responseCommitmentText',
      title: 'Response Commitment Text',
      type: 'text',
      rows: 3,
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
      title: 'headerTitle' 
    }
  }
})