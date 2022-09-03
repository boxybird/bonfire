import NProgress from 'nprogress'
import flamethrower from 'flamethrower-router'

document.addEventListener('DOMContentLoaded', () => {
  const flamethrower_router = flamethrower({
    log: false,
    pageTransitions: false,
  })

  window.flamethrower_router = flamethrower_router
})

NProgress.configure({
  showSpinner: false,
})

window.addEventListener('flamethrower:router:fetch', () => {
  NProgress.start()
})

window.addEventListener('flamethrower:router:end', () => {
  NProgress.done()
})
