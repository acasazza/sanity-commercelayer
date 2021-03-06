// const STUDIO_REWRITE = {
//   source: '/studio/:path*',
//   destination:
//     process.env.NODE_ENV === 'development'
//       ? 'http://localhost:3333/studio/:path*'
//       : '/studio/index.html',
// }

module.exports = {
  target: 'serverless',
  env: {
    JSCOV: 0,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    BUILD_LANGUAGES: process.env.BUILD_LANGUAGES,
    BUILD_CMS: process.env.BUILD_CMS,
    CL_CLIENT_ID: process.env.CL_CLIENT_ID,
    CL_ENDPOINT: process.env.CL_ENDPOINT,
  },
  // rewrites: () => [STUDIO_REWRITE],
}
