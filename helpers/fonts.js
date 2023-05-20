import localFont from 'next/font/local'

export const AntiqueLegacy = localFont({
  src: [
    {
      path: '../public/fonts/AntiqueLegacyTrial-Light.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  subsets: ['latin'],
  variable: '--font-AntiqueLegacy',
})
