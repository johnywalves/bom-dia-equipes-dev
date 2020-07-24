import Main from 'components/Main'
import getMessage from 'themes'

export default function Home() {
  return <Main message={getMessage()} />
}
