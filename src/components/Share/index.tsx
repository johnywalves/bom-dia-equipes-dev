import { MessageType } from 'themes/types'

import { Wrapper } from './styles'

const Share = ({ id }: MessageType) => (
  <Wrapper
    onClick={async () => {
      const url = `https://bomdiaequipesdev.com.br/${id}`
      await navigator.clipboard.writeText(url)
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 448 512"
    >
      <path
        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
        fill="var(--textNormal)"
      />
    </svg>
  </Wrapper>
)

export default Share
