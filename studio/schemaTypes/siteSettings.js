export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'meetingSchedule',
      title: 'Meeting schedule',
      description: 'Shown in the Home page stats bar, e.g. "Fri & Sat at 7PM".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'membershipNote',
      title: 'Membership note',
      description: 'e.g. "Free to Join".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagramStat',
      title: 'Instagram stat',
      description: 'e.g. "Over 1,000 Followers".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'discordStat',
      title: 'Discord stat',
      description: 'e.g. "Over 1,400 Members".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
