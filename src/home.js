import { events, formatEtDate } from './data.js'
import { initMotion } from './motion.js'
import { markCurrentNav, qs } from './ui.js'
import './styles.css'

markCurrentNav()

const spotlight = events.slice(0, 3)
qs('#spotlight').innerHTML = spotlight
  .map(
    (e) => `
    <a class="highlight" href="./kontsert.html?id=${e.id}" data-reveal="scale">
      <img src="${e.image}" alt="${e.imageAlt}" width="800" height="1000" loading="lazy" />
      <div class="highlight-body">
        <h3>${e.title}</h3>
        <p>${formatEtDate(e.dates[0].when)} · ${e.dates[0].city} · alates ${e.priceFrom} €</p>
      </div>
    </a>`
  )
  .join('')

qs('#upcoming').innerHTML = events
  .slice(0, 5)
  .map((e) => {
    const d = e.dates[0]
    return `
    <a class="event-row" href="./kontsert.html?id=${e.id}" data-reveal style="--y:24px">
      <img src="${e.image}" alt="${e.imageAlt}" width="200" height="250" loading="lazy" />
      <div>
        <h3>${e.title}</h3>
        <p class="meta">${formatEtDate(d.when)} · ${d.city} · ${d.venue}</p>
      </div>
      <div class="price">alates ${e.priceFrom} €<small>Osta pilet</small></div>
    </a>`
  })
  .join('')

initMotion()
