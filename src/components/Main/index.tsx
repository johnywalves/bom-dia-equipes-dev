import { useState, useEffect } from 'react'
import * as S from './styles'

type MainProps = {
  message: string
}

const Main = ({ message }: MainProps) => {
  const [styleGoodMorning, setStyleGoodMorning] = useState({})
  const [year, setYear] = useState('')

  useEffect(() => {
    setStyleGoodMorning({ opacity: '1' })
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <S.Wrapper>
      <S.GoodMorning style={styleGoodMorning}>{message}</S.GoodMorning>
      <S.Footer style={styleGoodMorning}>
        <p>
          ©{year} made with ♥ by{' '}
          <a
            href="https://www.johnywalves.com.br"
            rel="noopener noreferrer"
            target="_blank"
          >
            Johny W. Alves
          </a>
        </p>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Main
