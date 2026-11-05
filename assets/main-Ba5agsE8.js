import{a as e,r as t,t as n}from"./styles-CNETcmrr.js";import{n as r,r as i}from"./data-DuI8tjoP.js";n();var a=r.slice(0,3);t(`#spotlight`).innerHTML=a.map(e=>`
    <a class="highlight" href="./kontsert.html?id=${e.id}" data-reveal="scale">
      <img src="${e.image}" alt="${e.imageAlt}" width="800" height="1000" loading="lazy" />
      <div class="highlight-body">
        <h3>${e.title}</h3>
        <p>${i(e.dates[0].when)} · ${e.dates[0].city} · alates ${e.priceFrom} €</p>
      </div>
    </a>`).join(``),t(`#upcoming`).innerHTML=r.slice(0,5).map(e=>{let t=e.dates[0];return`
    <a class="event-row" href="./kontsert.html?id=${e.id}" data-reveal style="--y:24px">
      <img src="${e.image}" alt="${e.imageAlt}" width="200" height="250" loading="lazy" />
      <div>
        <h3>${e.title}</h3>
        <p class="meta">${i(t.when)} · ${t.city} · ${t.venue}</p>
      </div>
      <div class="price">alates ${e.priceFrom} €<small>Osta pilet</small></div>
    </a>`}).join(``),e();