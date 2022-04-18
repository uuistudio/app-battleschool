import { render } from '@redwoodjs/testing/web'

import TypingPage from './TypingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TypingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TypingPage />)
    }).not.toThrow()
  })
})
