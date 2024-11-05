export default function manifest() {
  return {
    name: 'Hitzfeed',
    short_name: 'Hitzfeed',
    description: 'sample description',
    start_url: '/',
    display: 'standalone',
    background_color: '#e0f7fa',
    theme_color: '#0077cc',
    icons: [
      {
        src: '/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],

    scope: '/',
  };
}
