import{a as e,i as t,n,o as r,r as i,t as a}from"./styles-CNETcmrr.js";import{a as o,r as s}from"./data-DuI8tjoP.js";a(),e();var c=n().get(`id`)||`abba2026`,l=n().get(`date`),u=o(c);i(`#title`).textContent=u.title,i(`#blurb`).textContent=u.blurb,i(`#cover`).src=u.image,i(`#cover`).alt=u.imageAlt,document.title=`${u.title} · Tartu Kontsert demo`;var d=i(`#dates`),f=l&&u.dates.some(e=>e.id===l)?l:u.dates[0].id;function p({pulseId:e}={}){if(d.innerHTML=u.dates.map(e=>{let t=e.id===f;return`
        <button type="button" class="date-option" data-id="${e.id}" aria-pressed="${t}">
          <div>
            <strong>${s(e.when)}, kell ${e.time}</strong>
            <span>${e.city} · ${e.venue}</span>
          </div>
          <span>alates ${u.priceFrom} €</span>
        </button>`}).join(``),e){let t=d.querySelector(`[data-id="${e}"]`);r(t)}}d.addEventListener(`click`,e=>{let t=e.target.closest(`[data-id]`);t&&(f=t.dataset.id,p({pulseId:f}))}),i(`#buy`).addEventListener(`click`,()=>{let e=u.dates.find(e=>e.id===f);location.href=`./osta.html?id=${u.id}&date=${e.id}`}),i(`#group`).addEventListener(`click`,()=>{t(`Demo: grupipäring läheks tegelikult lauri@kontsert.ee peale.`)}),p();