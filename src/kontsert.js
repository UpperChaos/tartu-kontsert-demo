import { formatEtDate, getEvent } from './data.js'
import { initMotion, pulse } from './motion.js'
import { markCurrentNav, params, qs, toast } from './ui.js'
import './styles.css'

markCurrentNav()
initMotion()

const id = params().get('id') || 'abba2026'
const preselect = params().get('date')
const event = getEvent(id)

qs('#title').textContent = event.title
qs('#blurb').textContent = event.blurb
qs('#cover').src = event.image
qs('#cover').alt = event.imageAlt
document.title = `${event.title} · Tartu Kontsert demo`

const pick = qs('#dates')
let selected =
  preselect && event.dates.some((d) => d.id === preselect)
    ? preselect
    : event.dates[0].id

function paint({ pulseId } = {}) {
  pick.innerHTML = event.dates
    .map((d) => {
      const pressed = d.id === selected
      return `
        <button type="button" class="date-option" data-id="${d.id}" aria-pressed="${pressed}">
          <div>
            <strong>${formatEtDate(d.when)}, kell ${d.time}</strong>
            <span>${d.city} · ${d.venue}</span>
          </div>
          <span>alates ${event.priceFrom} €</span>
        </button>`
    })
    .join('')

  if (pulseId) {
    const btn = pick.querySelector(`[data-id="${pulseId}"]`)
    pulse(btn)
  }
}

pick.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-id]')
  if (!btn) return
  selected = btn.dataset.id
  paint({ pulseId: selected })
})

qs('#buy').addEventListener('click', () => {
  const d = event.dates.find((x) => x.id === selected)
  location.href = `./osta.html?id=${event.id}&date=${d.id}`
})

qs('#group').addEventListener('click', () => {
  toast('Demo: grupipäring läheks tegelikult lauri@kontsert.ee peale.')
})

paint()
