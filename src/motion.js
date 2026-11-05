/** Viewport reveals + tuckable chrome (scroll hide, mouse-top reveal). */

const reduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initMotion() {
  document.documentElement.classList.add('js')

  document.fonts?.ready
    ?.then(() => document.documentElement.classList.add('fonts-ready'))
    .catch(() => {})
  setTimeout(() => document.documentElement.classList.add('fonts-ready'), 1500)

  wrapChrome()
  applyStagger()
  observeReveals()
  initChromeBehavior()
  initNavClicks()
}

function wrapChrome() {
  if (document.querySelector('.site-chrome')) return
  const demo = document.querySelector('.demo-bar')
  const header = document.querySelector('.site-header')
  if (!demo || !header) return

  const chrome = document.createElement('div')
  chrome.className = 'site-chrome'
  chrome.setAttribute('data-chrome', '')
  demo.parentNode.insertBefore(chrome, demo)
  chrome.append(demo, header)

  const zone = document.createElement('div')
  zone.className = 'chrome-hotzone'
  zone.setAttribute('aria-hidden', 'true')
  document.body.prepend(zone)
}

export function applyStagger(root = document) {
  root.querySelectorAll('[data-stagger]').forEach((group) => {
    const step = Number(group.dataset.stagger) || 120
    const base = Number(group.dataset.staggerBase) || 0
    group.querySelectorAll('[data-reveal]').forEach((el, i) => {
      el.style.setProperty('--d', `${base + i * step}ms`)
    })
  })
}

export function observeReveals(root = document) {
  const nodes = [...root.querySelectorAll('[data-reveal]:not(.is-in)')]
  if (!nodes.length) return

  if (reduced()) {
    nodes.forEach((el) => el.classList.add('is-in'))
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.add('is-in')
        io.unobserve(e.target)
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
  )

  const vh = window.innerHeight || 800
  nodes.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.bottom > 40 && rect.top < vh * 0.92) {
      el.classList.add('is-in')
      return
    }
    io.observe(el)
  })
}

export function revealFresh(root) {
  applyStagger(root)
  observeReveals(root)
}

function initChromeBehavior() {
  const chrome = document.querySelector('.site-chrome')
  const zone = document.querySelector('.chrome-hotzone')
  const header = document.querySelector('.site-header')
  if (!chrome) return

  let lastY = window.scrollY
  let tucked = false
  let peek = false
  let ticking = false

  const paint = () => {
    chrome.classList.toggle('is-tucked', tucked)
    chrome.classList.toggle('is-peek', peek)
    header?.classList.toggle('is-scrolled', window.scrollY > 24 || tucked || peek)
  }

  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      const y = window.scrollY
      const goingDown = y > lastY + 4
      const goingUp = y < lastY - 4

      if (reduced()) {
        tucked = false
      } else if (y < 48) {
        tucked = false
      } else if (goingDown && y > 90) {
        tucked = true
        peek = false
      } else if (goingUp) {
        tucked = false
      }

      lastY = y
      paint()
    })
  }

  const setPeek = (on) => {
    peek = on
    paint()
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  zone?.addEventListener('mouseenter', () => setPeek(true))
  chrome.addEventListener('mouseenter', () => setPeek(true))
  chrome.addEventListener('mouseleave', () => {
    if (window.scrollY > 90) {
      peek = false
      tucked = true
      paint()
    } else {
      setPeek(false)
    }
  })

  // Touch: tap top edge to reveal
  zone?.addEventListener(
    'pointerdown',
    () => {
      if (tucked) setPeek(true)
    },
    { passive: true }
  )

  paint()
}

function initNavClicks() {
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (reduced()) return
      a.classList.add('is-clicked')
      // Allow in-page hash to animate underline before jump
      if (a.hash && a.origin === location.origin && a.pathname === location.pathname) {
        e.preventDefault()
        setTimeout(() => {
          location.hash = a.hash
          a.classList.remove('is-clicked')
        }, 280)
        return
      }
      setTimeout(() => a.classList.remove('is-clicked'), 420)
    })
  })
}

export function pulse(el) {
  if (!el || reduced()) return
  el.classList.remove('is-pulse')
  void el.offsetWidth
  el.classList.add('is-pulse')
}
