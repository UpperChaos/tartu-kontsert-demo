import { formatEtDate, getDate, getEvent } from './data.js'
import { initMotion, pulse } from './motion.js'
import { markCurrentNav, params, qs, toast } from './ui.js'
import './styles.css'

markCurrentNav()
initMotion()

const eventId = params().get('id') || 'abba2026'
const dateId = params().get('date')
const event = getEvent(eventId)
const date = getDate(eventId, dateId)

qs('#headline').textContent = event.title
qs('#sub').textContent = `${formatEtDate(date.when)}, kell ${date.time} · ${date.city}, ${date.venue}`
qs('#stage-label').textContent = `Lava · ${date.venue}`
document.title = `Osta pilet · ${event.title}`
document.body.classList.add('page-checkout')

const board = qs('#seats')
const cartList = qs('#cart-list')
const totalEl = qs('#total')
const selected = new Set()
const price = event.priceFrom + 10
const taken = new Set([2, 5, 11, 18, 22, 27, 33, 40, 44, 51, 58, 63, 70, 77])

if (!date.seated) {
  qs('#seat-mode').hidden = true
  qs('#qty-mode').hidden = false
  qs('#qty').addEventListener('change', syncQty)
  syncQty()
} else {
  qs('#seat-mode').hidden = false
  qs('#qty-mode').hidden = true
  board.innerHTML = Array.from({ length: 80 }, (_, i) => {
    const n = i + 1
    const isTaken = taken.has(n)
    return `<button type="button" class="seat${isTaken ? ' is-taken' : ''}" data-n="${n}" aria-label="Koht ${n}" ${isTaken ? 'disabled' : ''}></button>`
  }).join('')

  board.addEventListener('click', (e) => {
    const seat = e.target.closest('.seat')
    if (!seat || seat.disabled) return
    const n = seat.dataset.n
    if (selected.has(n)) {
      selected.delete(n)
      seat.classList.remove('is-selected')
    } else {
      selected.add(n)
      seat.classList.add('is-selected')
      pulse(seat)
    }
    syncSeats({ animate: true })
  })
  syncSeats()
}

function syncSeats({ animate = false } = {}) {
  const items = [...selected].sort((a, b) => Number(a) - Number(b))
  cartList.innerHTML = items.length
    ? items
        .map((n, i) => {
          const row = Math.floor((Number(n) - 1) / 10) + 1
          const neu = animate && i === items.length - 1 ? ' is-new' : ''
          return `<li class="cart-line${neu}"><span>Rida ${row}, koht ${n}</span><span>${price.toFixed(2)} €</span></li>`
        })
        .join('')
    : `<li><span class="muted">Vali vähemalt üks koht</span><span></span></li>`

  totalEl.textContent = `${(items.length * price).toFixed(2)} €`
  if (animate && items.length) pulse(totalEl)
  qs('#pay').disabled = items.length === 0
  qs('#dock-count').textContent = items.length ? `${items.length} kohta` : 'Vali koht'
}

function syncQty() {
  const qty = Number(qs('#qty').value) || 1
  cartList.innerHTML = `<li class="cart-line is-new"><span>${qty} × pilet</span><span>${(qty * event.priceFrom).toFixed(2)} €</span></li>`
  totalEl.textContent = `${(qty * event.priceFrom).toFixed(2)} €`
  pulse(totalEl)
  qs('#pay').disabled = false
  qs('#dock-count').textContent = `${qty} piletit`
}

qs('#pay').addEventListener('click', () => {
  toast('Demo lõpp — päris makset siin ei ole. Perele näitamiseks piisab seni.')
})
