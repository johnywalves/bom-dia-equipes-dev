import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type ThemeChangeType = () => void
type PreferredTheme = (theme: string) => void

declare global {
  interface Window {
    __theme: string
    __onThemeChange: ThemeChangeType
    __setPreferredTheme: PreferredTheme
  }
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {};

                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }

                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                      localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                
                setTheme(preferredTheme || 'dark');
              })();
            `
          }}
        />
      </Html>
    )
  }
}
