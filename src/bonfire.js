import flamethrower from 'flamethrower-router'

const flamethrower_router = flamethrower({
  prefetch: 'visible',
  log: false,
  pageTransitions: false,
})

window.flamethrower_router = flamethrower_router
