import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: var(--bg);
  color: var(--textNormal);
  width: 100%;
  height: 100%;
  padding: '3rem';
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: var(--textLink);
    text-decoration: none;
  }
`

export const GoodMorning = styled.h1`
  opacity: 0;
  font-size: 3rem;
  width: min(40rem, 100%);
  transition: opacity 2s;
  transition-delay: 0.5s;
`

export const Footer = styled.footer`
  opacity: 0;
  font-size: 1.5rem;
  position: absolute;
  bottom: 2rem;
  transition: opacity 2.5s;
  transition-delay: 1.5s;
`
