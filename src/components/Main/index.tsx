import {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useSyncExternalStore
} from 'react'

import Share from 'components/Share'
import { MessageType } from 'themes/types'

import { Wrapper, Copied, GoodMorning, Footer, Astro } from './styles'

const subscribeTheme = (onChange: () => void) => {
  window.__onThemeChange = onChange
  return () => {
    window.__onThemeChange = () => undefined
  }
}
const getTheme = () => window.__theme
const getServerTheme = () => ''

const Main = ({ id, text }: MessageType) => {
  const [styleGoodMorning, setStyleGoodMorning] = useState({})
  const [copied, setCopied] = useState(false)
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme)

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    // Trigger CSS fade-in transition after first paint
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStyleGoodMorning({ opacity: 1 })
  }, [])

  const message = useMemo(() => text[0].toUpperCase() + text.slice(1), [text])

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
      <Share id={id} text={text} />
    </Wrapper>
  )
}

export default Main
