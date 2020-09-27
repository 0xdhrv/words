import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`:root { supported-color-schemes: light; }`}</style>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
