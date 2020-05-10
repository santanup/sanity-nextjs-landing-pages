export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb784e5588cea9472bfb8fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3pce6jb5',
                  apiId: '86a184b5-5eec-43cc-9bfd-63f8ea4aa244'
                },
                {
                  buildHookId: '5eb784e59b1349785029209d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yg26sebe',
                  apiId: '9449d4bc-d477-4a8d-87ec-88b0c0432416'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/santanup/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yg26sebe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
