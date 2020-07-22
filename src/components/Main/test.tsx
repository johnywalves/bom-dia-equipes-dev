import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main message={'Testing message'} />)

    expect(
      screen.getByRole('heading', { name: /testing message/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main message={'Testing message'} />)

    expect(container.firstChild).toHaveStyle({
      'background-color': 'var(--bg)'
    })
  })
})
