export default {
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      description: 'Shown exactly as typed, e.g. "Friday, January 9th".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Event name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'order',
      title: 'Order',
      description: 'Controls the position on the Home page timeline — lower numbers come first.',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'label', subtitle: 'date'},
  },
}
