import { useCallback, useState, useEffect } from 'react'

import { Wrapper, Copied, GoodMorning, Footer, Astro } from './styles'

const Main = ({ message }: { message: string }) => {
  const [styleGoodMorning, setStyleGoodMorning] = useState({})
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState('')

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  useEffect(() => {
    setStyleGoodMorning({ opacity: 1 })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(message)
    setCopied(true)
  }, [setCopied, message])

  const backCopy = useCallback(() => {
    setCopied(false)
  }, [])

  return (
    <Wrapper>
      {copied ? (
        <Copied onClick={backCopy}>Copiado!</Copied>
      ) : (
        <GoodMorning style={styleGoodMorning} onClick={copy}>
          {message}
        </GoodMorning>
      )}
      <Footer style={styleGoodMorning}>
        <p>
          Made with <span>♥</span> by{' '}
          <a
            href="https://www.johnywalves.com.br"
            rel="noopener noreferrer"
            target="_blank"
          >
            Johny W. Alves
          </a>
        </p>
      </Footer>
      <Astro
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
      />
    </Wrapper>
  )
}

export default Main
