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
                  buildHookId: '60a6bc9d6e9069100402b353',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-4erqmz7d',
                  apiId: '6d4a9aab-4c5b-42ad-a2a3-3775322b1825'
                },
                {
                  buildHookId: '60a6bc9e0ea4d7137c0de8cb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-48ntk1np',
                  apiId: '717de9de-ad4d-44a7-a436-5f5693adff74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JamesArmstrong92/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-48ntk1np.netlify.app', category: 'apps'}
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
