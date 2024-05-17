/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'sysadmin KASM workspaces',
    description: 'Repository of custom KASM workspaces by me',
    icon: '/img/logo.svg',
    listUrl: 'https://tinkermesomething.github.io/kasm-sysadmin/',
    contactUrl: 'https://github.com/tinkermesomething/kasm-sysadmin/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-sysadmin/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
