const isProd = process.env.NODE_ENV === 'production'

const remotePatterns = []

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
  assetPrefix: isProd ? process.env.PUBLIC_URL : undefined
}
