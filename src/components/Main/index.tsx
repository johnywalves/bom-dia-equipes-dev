import { useCallback, useState, useEffect } from 'react'

import Share from 'components/Share'
import { MessageType } from 'themes/types'

import { Wrapper, Copied, GoodMorning, Footer, Astro } from './styles'

const Main = ({ id, text }: MessageType) => {
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

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [setCopied, text])

  const backCopy = useCallback(() => {
    setCopied(false)
  }, [])

  return (
    <Wrapper>
      {copied ? (
        <Copied onClick={backCopy}>Copiado!</Copied>
      ) : (
        <GoodMorning style={styleGoodMorning} onClick={copy}>
          {text[0].toUpperCase() + text.slice(1)}
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
      <Share id={id} text={text} />
    </Wrapper>
  )
}

export default Main
