import { render } from '@redwoodjs/testing/web'

import ArenaPage from './ArenaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArenaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArenaPage />)
    }).not.toThrow()
  })
})
