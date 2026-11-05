import{a as e,r as t,s as n,t as r}from"./styles-CNETcmrr.js";import{n as i,r as a,t as o}from"./data-DuI8tjoP.js";r(),e();var s=t(`#city`),c=t(`#count`),l=t(`#cal-grid`),u=t(`#cal-title`),d=t(`#day-title`),f=t(`#day-events`),p=t(`#show-list`);s.innerHTML=`<option value="">Kõik linnad</option>`+o().map(e=>`<option value="${e}">${e}</option>`).join(``);var m=i.flatMap(e=>e.dates.map(e=>e.when)).sort()[0],h=new Date(`${m.slice(0,7)}-01T12:00:00`),g=null;function _(){return s.value}function v(){let e=_();return i.flatMap(t=>t.dates.filter(t=>!e||t.city===e).map(e=>({event:t,date:e})))}function y(){let e=_();return i.map(t=>({event:t,dates:t.dates.filter(t=>!e||t.city===e)})).filter(e=>e.dates.length)}function b(e){return v().filter(t=>t.date.when===e)}function x(e){return new Intl.DateTimeFormat(`et-EE`,{month:`long`,year:`numeric`}).format(e)}function S(){C(),T()}function C(){let e=h.getFullYear(),t=h.getMonth();u.textContent=x(h);let n=(new Date(e,t,1).getDay()+6)%7,r=new Date(e,t+1,0).getDate(),i=[];for(let e=0;e<n;e++)i.push(`<button type="button" class="cal-day" disabled></button>`);for(let n=1;n<=r;n++){let r=`${e}-${String(t+1).padStart(2,`0`)}-${String(n).padStart(2,`0`)}`,a=b(r),o=g===r,s=a.slice(0,3).map(e=>`<img src="${e.event.image}" alt="" width="18" height="18" loading="lazy" />`).join(``);i.push(`
      <button type="button" class="cal-day${a.length?` has-events`:``}${o?` is-selected`:``}" data-day="${r}" ${a.length?``:`disabled`} title="${a.map(e=>e.event.title).join(`, `)}">
        <span class="cal-day-num">${n}</span>
        <span class="cal-thumbs">${s}</span>
      </button>`)}l.innerHTML=i.join(``),c.textContent=`${y().length} kontserti`,w()}function w(){if(!g){let e=v().sort((e,t)=>e.date.when.localeCompare(t.date.when))[0];d.textContent=`Vali kuupäev`,f.innerHTML=e?`<div class="day-hint">
          <img src="${e.event.image}" alt="" width="120" height="120" loading="lazy" />
          <p class="meta">Nt ${a(e.date.when)} · klõpsi päeva, millel on pilt</p>
        </div>`:`<p class="meta">Selles linnas kontserte ei ole.</p>`;return}let e=b(g);d.textContent=a(g),f.innerHTML=e.length?e.map(({event:e,date:t})=>`
    <a class="day-card day-card-lg" href="./kontsert.html?id=${e.id}&date=${t.id}">
      <img src="${e.image}" alt="${e.imageAlt}" width="120" height="120" loading="lazy" />
      <div>
        <strong>${e.title}</strong>
        <span>${t.time} · ${t.city}</span>
        <span>${t.venue}</span>
        <span class="day-price">alates ${e.priceFrom} €</span>
      </div>
    </a>`).join(``):`<p class="meta">Sellel päeval pileteid pole.</p>`}function T(){let e=y();e.length?(p.innerHTML=e.map(({event:e,dates:t})=>{let n=t.map(t=>`
        <li>
          <a href="./kontsert.html?id=${e.id}&date=${t.id}">
            <span>${a(t.when)}, ${t.time}</span>
            <span>${t.city} · ${t.venue}</span>
          </a>
        </li>`).join(``);return`
      <article class="show-block" data-reveal style="--y:22px">
        <a class="show-cover" href="./kontsert.html?id=${e.id}">
          <img src="${e.image}" alt="${e.imageAlt}" width="320" height="400" loading="lazy" />
        </a>
        <div class="show-body">
          <h3><a href="./kontsert.html?id=${e.id}">${e.title}</a></h3>
          <p class="show-price">alates ${e.priceFrom} €</p>
          <ul class="show-dates">${n}</ul>
          <a class="btn btn-dark" href="./kontsert.html?id=${e.id}">Vaata / osta</a>
        </div>
      </article>`}).join(``),n(p)):p.innerHTML=`<div class="empty">Selle filtriga kontserte ei leitud.</div>`}l.addEventListener(`click`,e=>{let t=e.target.closest(`[data-day]`);t&&!t.disabled&&(g=t.dataset.day,C())}),t(`#cal-prev`).addEventListener(`click`,()=>{h=new Date(h.getFullYear(),h.getMonth()-1,1),g=null,C()}),t(`#cal-next`).addEventListener(`click`,()=>{h=new Date(h.getFullYear(),h.getMonth()+1,1),g=null,C()}),s.addEventListener(`change`,()=>{g=null,S()}),S();