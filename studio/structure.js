export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('game').title('Games'),
      S.documentTypeListItem('timelineEvent').title('Schedule'),
      S.documentTypeListItem('eboardMember').title('eBoard'),
      S.documentTypeListItem('clubPhoto').title('Club Photos'),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])
