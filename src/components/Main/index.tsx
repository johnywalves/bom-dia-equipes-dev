import { useState, useEffect } from 'react'
import * as S from './styles'

type MainProps = {
  message: string
}

//var(--textNormal/

const Main = ({ message }: MainProps) => {
  const [styleGoodMorning, setStyleGoodMorning] = useState({})

  useEffect(() => {
    setStyleGoodMorning({ opacity: '1' })
  }, [setStyleGoodMorning])

  return (
    <S.Wrapper>
      <S.GoodMorning
        dangerouslySetInnerHTML={{ __html: message }}
        style={styleGoodMorning}
      />
      <S.Footer style={styleGoodMorning}>
        <p>
          ©<span id="currentYear"></span> made with ♥ by{' '}
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
