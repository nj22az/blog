import {defineType} from 'sanity'

export default defineType({
  title: 'Code',
  name: 'code',
  type: 'object',
  fields: [
    {
      title: 'Language',
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'React JSX', value: 'jsx'},
          {title: 'Python', value: 'python'},
          {title: 'Bash', value: 'bash'},
          {title: 'JSON', value: 'json'},
          {title: 'Markdown', value: 'markdown'},
        ],
      },
      initialValue: 'javascript',
    },
    {
      title: 'Filename',
      name: 'filename',
      type: 'string',
      description: 'Optional filename to display with the code block',
    },
    {
      title: 'Code',
      name: 'code',
      type: 'text',
      rows: 10,
    },
  ],
  preview: {
    select: {
      title: 'filename',
      subtitle: 'language',
      code: 'code',
    },
    prepare({title, subtitle, code}) {
      return {
        title: title || 'Code block',
        subtitle: subtitle ? `Language: ${subtitle}` : 'No language specified',
        media: () => '💻',
      }
    },
  },
})