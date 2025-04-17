import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'

import { completeLibraries } from 'themes'
import { MessageType } from 'themes/types'

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

const emptyContext: MessageType = {
  id: '',
  text: ''
}

export const getStaticProps = (async (context) => {
  const { messageId } = (context.params ?? emptyContext) as ContextProps
  const found = completeLibraries.find(({ id }) => id === messageId)
  const text = found?.text ?? ''
  const props = { id: messageId, text }

  return { props }
}) satisfies GetStaticProps<MessageType>

function MessagePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Main {...props} />
}

export default MessagePage
