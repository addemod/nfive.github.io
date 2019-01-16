/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'NFive',
  tagline: '.NET plugin platform for FiveM',
  url: 'https://nfive.io',
  baseUrl: '/',

  projectName: 'nfive.github.io',
  organizationName: 'NFive',

  cname: 'nfive.io',
  editUrl: 'https://github.com/NFive/nfive.github.io/blob/src/docs/',

  headerLinks: [
    {doc: 'overview', label: 'Documentation'},
    { href: "/api", label: "API" },
    { href: "https://github.com/NFive", label: "GitHub" },
    { page: 'help', label: 'Help' },
  ],

  headerIcon: 'img/logo-light.svg',
  footerIcon: 'img/logo-light.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#cb3837',
    secondaryColor: '#b11b1b',
  },

  copyright: `Copyright © 2018-${new Date().getFullYear()} NFive`,

  highlight: {
    theme: 'atom-one-dark',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  ogImage: 'img/logo.svg',
  twitterImage: 'img/logo.svg',

  enableUpdateTime: true,

  repoUrl: 'https://github.com/NFive/NFive',

  algolia: {
    apiKey: '326831da3dca93a8edf49bdc3b33fa2c',
    indexName: 'nfive',
    algoliaOptions: {
      facetFilters: [ "language:LANGUAGE", "version:VERSION" ]
    }
  },
};

module.exports = siteConfig;