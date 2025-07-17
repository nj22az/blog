import {CheckCircle, Clock} from 'lucide-react'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: {type: 'post'},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Commenter Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(1000),
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'website',
      title: 'Website (Optional)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
      media: 'approved',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: subtitle?.substring(0, 50) + '...',
        media: media ? CheckCircle : Clock,
      }
    },
  },
  orderings: [
    {
      title: 'Created At, New',
      name: 'createdAtDesc',
      by: [
        {field: 'createdAt', direction: 'desc'}
      ]
    },
  ],
})