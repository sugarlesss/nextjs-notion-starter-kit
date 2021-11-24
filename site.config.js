module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'f2ba4f8445c641aba2161bbf7362343c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '無糖的小宇宙',
  domain: 'notion.sugarless.cn',
  author: '無糖',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'Sugarless',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '46669f4ecba84783985b94cc7b425ae8',
    '/friends': '106249ab34cf473092891f26885563f9',
  }
  // pageUrlOverrides: null
}
