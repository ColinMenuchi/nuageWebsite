export default {
  name: 'eboardMember',
  title: 'eBoard Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      description: 'Shown on their card, e.g. "Club President and Forest Shuffle Shuffler".',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    },
    {
      name: 'favoriteGame',
      title: 'Favorite game',
      type: 'reference',
      to: [{type: 'game'}],
    },
    {
      name: 'order',
      title: 'Order',
      description: 'Controls the position on the About page — lower numbers come first.',
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
    select: {title: 'name', subtitle: 'role', media: 'photo'},
  },
}
