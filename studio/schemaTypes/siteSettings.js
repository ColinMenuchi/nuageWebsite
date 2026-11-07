export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'stats',
      title: 'Stats',
      description:
        'The stat pills on the Home page, under "Who Are We?". Add, remove, reorder, or edit ' +
        'any of them freely. The "Games" count is calculated automatically from the collection ' +
        'and always shown first, so it does not need an entry here.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              description: 'A single emoji, e.g. 📅',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {title: 'label', subtitle: 'value', icon: 'icon'},
            prepare({title, subtitle, icon}) {
              return {title: `${icon ?? ''} ${title ?? ''}`.trim(), subtitle}
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
}
