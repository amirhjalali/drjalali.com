module.exports = {
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 85,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 85,
  },
  responsive: {
    adapter: require('responsive-loader/sharp')
  }
}