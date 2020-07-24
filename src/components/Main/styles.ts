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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 3rem;
  width: min(40rem, 100%);
  transition: opacity 2s;
  transition-delay: 0.5s;
  cursor: pointer;
  z-index: 2;
`

export const Copied = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--textConfirmed);
  font-size: 4rem;
  width: min(40rem, 100%);
  cursor: pointer;
  z-index: 2;
`

export const Astro = styled.footer`
  margin: 0;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  position: absolute;
  right: 1.75rem;
  top: 1.75rem;
  z-index: 1;
  border: solid 1px;
  transition: all 0.5s ease-in;
  cursor: pointer;
  background-color: #ebf3fe;
  box-shadow: inset -4px 0px 0px #d8e8f7, inset 2px 0px 0px #ffffff,
    inset -5px 0px 0px 20px #e2eefa, 0px 0px 0px 8px #ffffff0c,
    0px 0px 0px 16px #ffffff08, 0px 0px 0px 24px #ffffff05;

  &:after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #d8e8f7;
    position: absolute;
    top: 20%;
    left: 20%;
    transition: all 0.5s ease-in;
    box-shadow: 4px -2px 0px -1px #d8e8f7, 4px 1px 0px -2px #d8e8f7;
  }

  .light & {
    background-color: #ffdb01 !important;
    box-shadow: inset -4px 0px 0px #ff8603, inset 2px 0px 0px #ffffffcc,
      inset -5px 0px 0px 2px #ffd201, 0px 0px 0px 8px #ffd20133,
      0px 0px 0px 16px #ffd20133, 0px 0px 0px 24px #ffd20111,
      0px 0px 0px 130vh #fff, 0px 0px 0px 130vw #fff,
      0px 0px 0px 200vh #ffffff55, 0px 0px 0px 200vw #ffffff55;
  }

  .light &:after {
    background-color: #ffd201;
    box-shadow: 4px -2px 0px -1px #ffd201, 4px 1px 0px -2px #ffd201;
  }
`

export const Footer = styled.footer`
  opacity: 0;
  font-size: 1.5rem;
  position: absolute;
  bottom: 2rem;
  transition: opacity 2.5s;
  transition-delay: 1.5s;
  z-index: 2;
`
