import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'

import { completeLibraries } from 'themes'

const Main = dynamic(() => import('components/Main'), { ssr: false })

export const getStaticPaths = (async () => {
  const paths = completeLibraries.map(({ id, text }) => ({
    params: {
      messageId: id,
      message: text
    }
  }))

  return {
    paths,
    fallback: false
  }
}) satisfies GetStaticPaths

type ContextProps = { messageId: string }

const emptyContext = {
  messageId: ''
}

export const getStaticProps = (async (context) => {
  const { messageId } = (context.params ?? emptyContext) as ContextProps
  const found = completeLibraries.find(({ id }) => id === messageId)
  return { props: { message: found?.text ?? '' } }
}) satisfies GetStaticProps<{
  message: string
}>

function MessagePage({
  message
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Main message={message} />
}

export default MessagePage
