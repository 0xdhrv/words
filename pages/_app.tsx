import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'
import theme from '../styles/theme'

import '../styles/style.css'
import '../styles/index.css'
import 'prismjs/themes/prism-tomorrow.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
