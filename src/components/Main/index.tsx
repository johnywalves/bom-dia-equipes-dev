import { useCallback, useState, useEffect } from 'react'
import * as S from './styles'

type MainProps = {
  message: string
}

const Main = ({ message }: MainProps) => {
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
    <S.Wrapper>
      {copied ? (
        <S.Copied onClick={backCopy}>Copiado!</S.Copied>
      ) : (
        <S.GoodMorning style={styleGoodMorning} onClick={copy}>
          {message}
        </S.GoodMorning>
      )}
      <S.Footer style={styleGoodMorning}>
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
      </S.Footer>
      <S.Astro
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
      />
    </S.Wrapper>
  )
}

export default Main
