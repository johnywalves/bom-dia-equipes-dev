import dynamic from 'next/dynamic'

import getMessage from 'themes'

const Main = dynamic(() => import('components/Main'), { ssr: false })

export default function Home() {
  return <Main {...getMessage()} />
}
