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
      description: 'Shown as alternate text in lieu of the photo if it [the photo] cannot render for whatever reason.',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'alt', media: 'image'},
  },
}
