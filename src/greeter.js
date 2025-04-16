import { createApp, h } from 'vue'

const Greeter = {
  init(targetSelector, props = {}) {
    const container = document.querySelector(targetSelector)
    if (!container) {
      return console.error('Greeter target not found')
    }

    const App = {
      props: ['message'],
      setup(props) {
        const handleClick = () => {
          console.log(props.message)
        }
        return () =>
          h(
            'button',
            {
              style:
                'padding: 10px 20px; background: #3b3b98; color: white; border: none; border-radius: 5px; cursor: pointer;',
              onClick: handleClick
            },
            'Click Me'
          )
      }
    }

    createApp(App, props).mount(container)
  }
}

window.Greeter = Greeter
