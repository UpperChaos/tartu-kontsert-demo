export function qs(sel, root = document) {
  return root.querySelector(sel)
}

export function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)]
}

export function params() {
  return new URLSearchParams(location.search)
}

export function toast(message) {
  let el = qs('#toast')
  if (!el) {
    el = document.createElement('div')
    el.id = 'toast'
    el.className = 'toast'
    el.setAttribute('role', 'status')
    document.body.appendChild(el)
  }
  el.textContent = message
  el.classList.add('is-on')
  clearTimeout(toast._t)
  toast._t = setTimeout(() => el.classList.remove('is-on'), 2800)
}

export function markCurrentNav() {
  const path = location.pathname.split('/').pop() || 'index.html'
  qsa('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href') || ''
    const file = href.split('/').pop()
    if (file === path || (path === '' && file === 'index.html')) {
      a.setAttribute('aria-current', 'page')
    }
  })
}
