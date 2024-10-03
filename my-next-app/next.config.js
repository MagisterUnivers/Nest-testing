const isProd = process.env.NODE_ENV === 'production'

const remotePatterns = [{
    hostname: 't.me'
  }]

if (!isProd) {
  remotePatterns.push({
    hostname: 'localhost'
  })
}

module.exports = {
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  images: {
    remotePatterns
  },
   reactStrictMode: false,
  assetPrefix: isProd ? process.env.PUBLIC_URL : undefined
}
