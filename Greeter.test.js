import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createApp, h } from 'vue'

beforeEach(() => {
  document.body.innerHTML = '<div id="test"></div>'
})

const mockConsole = vi.spyOn(console, 'log')

const App = {
  props: ['message'],
  setup(props) {
    const handleClick = () => console.log(props.message)
    return () => h('button', { onClick: handleClick }, 'Click Me')
  }
}

describe('Greeter Component', () => {
  it('renders button correctly', () => {
    const el = document.createElement('div')
    document.body.appendChild(el)
    createApp(App, { message: 'Hello Test' }).mount(el)
    expect(el.querySelector('button')).toBeTruthy()
  })

  it('prints message when clicked', async () => {
    const el = document.createElement('div')
    document.body.appendChild(el)
    createApp(App, { message: 'Hello Click' }).mount(el)
    el.querySelector('button').click()
    expect(mockConsole).toHaveBeenCalledWith('Hello Click')
  })
})
