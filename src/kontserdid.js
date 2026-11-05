import { allCities, events, formatEtDate } from './data.js'
import { initMotion, revealFresh } from './motion.js'
import { markCurrentNav, qs } from './ui.js'
import './styles.css'

markCurrentNav()
initMotion()

const citySelect = qs('#city')
const count = qs('#count')
const calGrid = qs('#cal-grid')
const calTitle = qs('#cal-title')
const dayTitle = qs('#day-title')
const dayEvents = qs('#day-events')
const showList = qs('#show-list')

citySelect.innerHTML =
  `<option value="">Kõik linnad</option>` +
  allCities()
    .map((c) => `<option value="${c}">${c}</option>`)
    .join('')

const firstWhen = events.flatMap((e) => e.dates.map((d) => d.when)).sort()[0]
let cursor = new Date(`${firstWhen.slice(0, 7)}-01T12:00:00`)
let selectedDay = null

function cityFilter() {
  return citySelect.value
}

/** Flat date rows for the calendar (city-filtered). */
function dateRows() {
  const city = cityFilter()
  return events.flatMap((e) =>
    e.dates
      .filter((d) => !city || d.city === city)
      .map((d) => ({ event: e, date: d }))
  )
}

/** Shows that still have at least one date in the selected city (catalogue order). */
function filteredShows() {
  const city = cityFilter()
  return events
    .map((e) => ({
      event: e,
      dates: e.dates.filter((d) => !city || d.city === city),
    }))
    .filter((s) => s.dates.length)
}

function eventsOnDay(iso) {
  return dateRows().filter((r) => r.date.when === iso)
}

function monthLabel(d) {
  return new Intl.DateTimeFormat('et-EE', { month: 'long', year: 'numeric' }).format(d)
}

function paint() {
  paintCalendar()
  paintShows()
}

function paintCalendar() {
  const y = cursor.getFullYear()
  const m = cursor.getMonth()
  calTitle.textContent = monthLabel(cursor)

  const first = new Date(y, m, 1)
  const startPad = (first.getDay() + 6) % 7
  const daysInMonth = new Date(y, m + 1, 0).getDate()
  const cells = []

  for (let i = 0; i < startPad; i++) {
    cells.push(`<button type="button" class="cal-day" disabled></button>`)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const hits = eventsOnDay(iso)
    const selected = selectedDay === iso
    const thumbs = hits
      .slice(0, 3)
      .map(
        (h) =>
          `<img src="${h.event.image}" alt="" width="18" height="18" loading="lazy" />`
      )
      .join('')
    cells.push(`
      <button type="button" class="cal-day${hits.length ? ' has-events' : ''}${selected ? ' is-selected' : ''}" data-day="${iso}" ${hits.length ? '' : 'disabled'} title="${hits.map((h) => h.event.title).join(', ')}">
        <span class="cal-day-num">${day}</span>
        <span class="cal-thumbs">${thumbs}</span>
      </button>`)
  }

  calGrid.innerHTML = cells.join('')
  count.textContent = `${filteredShows().length} kontserti`
  paintDayPanel()
}

function paintDayPanel() {
  if (!selectedDay) {
    const next = dateRows().sort((a, b) => a.date.when.localeCompare(b.date.when))[0]
    dayTitle.textContent = 'Vali kuupäev'
    dayEvents.innerHTML = next
      ? `<div class="day-hint">
          <img src="${next.event.image}" alt="" width="120" height="120" loading="lazy" />
          <p class="meta">Nt ${formatEtDate(next.date.when)} · klõpsi päeva, millel on pilt</p>
        </div>`
      : `<p class="meta">Selles linnas kontserte ei ole.</p>`
    return
  }

  const hits = eventsOnDay(selectedDay)
  dayTitle.textContent = formatEtDate(selectedDay)
  if (!hits.length) {
    dayEvents.innerHTML = `<p class="meta">Sellel päeval pileteid pole.</p>`
    return
  }

  dayEvents.innerHTML = hits
    .map(
      ({ event: e, date: d }) => `
    <a class="day-card day-card-lg" href="./kontsert.html?id=${e.id}&date=${d.id}">
      <img src="${e.image}" alt="${e.imageAlt}" width="120" height="120" loading="lazy" />
      <div>
        <strong>${e.title}</strong>
        <span>${d.time} · ${d.city}</span>
        <span>${d.venue}</span>
        <span class="day-price">alates ${e.priceFrom} €</span>
      </div>
    </a>`
    )
    .join('')
}

function paintShows() {
  const shows = filteredShows()
  if (!shows.length) {
    showList.innerHTML = `<div class="empty">Selle filtriga kontserte ei leitud.</div>`
    return
  }

  showList.innerHTML = shows
    .map(({ event: e, dates }) => {
      const schedule = dates
        .map(
          (d) => `
        <li>
          <a href="./kontsert.html?id=${e.id}&date=${d.id}">
            <span>${formatEtDate(d.when)}, ${d.time}</span>
            <span>${d.city} · ${d.venue}</span>
          </a>
        </li>`
        )
        .join('')

      return `
      <article class="show-block" data-reveal style="--y:22px">
        <a class="show-cover" href="./kontsert.html?id=${e.id}">
          <img src="${e.image}" alt="${e.imageAlt}" width="320" height="400" loading="lazy" />
        </a>
        <div class="show-body">
          <h3><a href="./kontsert.html?id=${e.id}">${e.title}</a></h3>
          <p class="show-price">alates ${e.priceFrom} €</p>
          <ul class="show-dates">${schedule}</ul>
          <a class="btn btn-dark" href="./kontsert.html?id=${e.id}">Vaata / osta</a>
        </div>
      </article>`
    })
    .join('')

  revealFresh(showList)
}

calGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-day]')
  if (!btn || btn.disabled) return
  selectedDay = btn.dataset.day
  paintCalendar()
})

qs('#cal-prev').addEventListener('click', () => {
  cursor = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1)
  selectedDay = null
  paintCalendar()
})

qs('#cal-next').addEventListener('click', () => {
  cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1)
  selectedDay = null
  paintCalendar()
})

citySelect.addEventListener('change', () => {
  selectedDay = null
  paint()
})

paint()
