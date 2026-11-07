export default {
  name: 'clubPhoto',
  title: 'Club Photo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Caption',
      description: 'Shown as alt text; also used as a caption if you add one later.',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'alt', media: 'image'},
  },
}
