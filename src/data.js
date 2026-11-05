/** Demo catalogue — real show titles/dates from kontsert.ee; images are placeholders only. */
export const events = [
  {
    id: 'sinatra',
    title: 'Frank Sinatra gaalaõhtu “My Way”',
    blurb:
      'Kolm solisti ja bigbänd toovad lavale Sinatra kuldse repertuaari — elegants, swing ja saalitäis peomeeleolu.',
    image:
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: kontserdisaal hämaras valguses',
    priceFrom: 39,
    dates: [
      { id: 'sin-tln', when: '2026-11-14', time: '19:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
      { id: 'sin-trt', when: '2026-11-15', time: '19:00', city: 'Tartu', venue: 'Vanemuise kontserdimaja', seated: true },
    ],
  },
  {
    id: 'koit-taukar',
    title: 'Koit Toome ja Karl-Erik Taukar „Jõulukontserdid“',
    blurb:
      'Kahe armastatud hääle jõuluturnee — soojad balladid, jõululaulud ja saalitäis ühist laulu.',
    image:
      'https://images.unsplash.com/photo-1482517964108-b2409bc0fe2b?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: soe talvealune valgus',
    priceFrom: 42,
    dates: [
      { id: 'kt-14', when: '2026-12-14', time: '19:00', city: 'Tartu', venue: 'Vanemuise kontserdimaja', seated: true },
      { id: 'kt-30', when: '2026-12-30', time: '19:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
    ],
  },
  {
    id: 'suured',
    title: '“Suured Tüdrukud ja Väike Prints”',
    blurb:
      'Dagmar Oja, Kaire Vilgats ja Reigo Tamm — jõuline vokaal, teatrimeel ja peotuju ühes õhtus.',
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: publik kontserdil',
    priceFrom: 35,
    dates: [
      { id: 'su-14', when: '2026-12-14', time: '19:00', city: 'Pärnu', venue: 'Pärnu kontserdimaja', seated: true },
      { id: 'su-22', when: '2026-12-22', time: '19:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
      { id: 'su-27', when: '2026-12-27', time: '19:00', city: 'Tartu', venue: 'Vanemuise kontserdimaja', seated: true },
    ],
  },
  {
    id: 'abba2026',
    title: 'Särav aastavahetuse kontsert ABBA hittidega',
    blurb:
      'Tribüütbänd Björn This Way toob lavale ABBA ajatuid hitte — särav, tantsuline ja ideaalne aastavahetuse eelõhtuks.',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: lava ja publik ülaltvaates',
    priceFrom: 45,
    dates: [
      { id: 'ab-26', when: '2026-12-26', time: '19:00', city: 'Mooste', venue: 'Mooste Folgikoda', seated: false },
      { id: 'ab-27', when: '2026-12-27', time: '19:00', city: 'Jõhvi', venue: 'Jõhvi kontserdimaja', seated: true },
      { id: 'ab-28', when: '2026-12-28', time: '19:00', city: 'Tartu', venue: 'Vanemuise kontserdimaja', seated: true },
      { id: 'ab-29', when: '2026-12-29', time: '19:00', city: 'Pärnu', venue: 'Pärnu kontserdimaja', seated: true },
      { id: 'ab-30', when: '2026-12-30', time: '19:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
    ],
  },
  {
    id: 'les-bohemes',
    title: 'Les Bohèmes — „Tribute To Three Tenors“',
    blurb:
      'Kolm tenorihäält, ooperiklassika ja tuntud hitid — aastavahetuse galameeleolu ilma jäikuseta.',
    image:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: orkestri toolid saalis',
    priceFrom: 40,
    dates: [
      { id: 'lb-29', when: '2026-12-29', time: '19:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
    ],
  },
  {
    id: 'ines',
    title: 'Ines — „Kus kulgeb kuu“',
    blurb:
      'Inese jõuluajakontserdid — intiimne lava, tuttavad lood ja talvine rahu.',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: lava valgusvihud',
    priceFrom: 38,
    dates: [
      { id: 'in-20', when: '2026-12-20', time: '19:00', city: 'Tartu', venue: 'Vanemuise kontserdimaja', seated: true },
    ],
  },
  {
    id: 'anne-veski',
    title: 'Anne Veski — “Kõik on enda teha”',
    blurb:
      'Aastavahetuse klassika: Anne Veski hitid, energia ja publik, kes teab iga sõna peast.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: mikrofon lava peal',
    priceFrom: 45,
    dates: [
      { id: 'av-31', when: '2026-12-31', time: '20:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
    ],
  },
  {
    id: 'naistep',
    title: 'Naistepäeva galakontserdid „Meestelt naistele“',
    blurb:
      'Traditsiooniline kevadine galasari — Eesti meesartistid lavalt naistele pühendatud õhtuga.',
    image:
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: kontserdipublik käsi üleval',
    priceFrom: 36,
    dates: [
      { id: 'np-08', when: '2027-03-08', time: '19:00', city: 'Tartu', venue: 'Vanemuise kontserdimaja', seated: true },
    ],
  },
  {
    id: 'pihlap',
    title: 'Tarmo Pihlap 75 — “Valgeid roose”',
    blurb:
      'Mälestuskontsert legendaarsele häälele — ajatud lood ja austav peomeeleolu.',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf529e052d?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: kitarr lava peal',
    priceFrom: 32,
    dates: [
      { id: 'tp-01', when: '2027-04-12', time: '19:00', city: 'Tallinn', venue: 'Alexela kontserdimaja', seated: true },
    ],
  },
  {
    id: 'rockfest',
    title: 'Tartu Rock Fest 2027',
    blurb:
      'Kahepäevane rockifestival Tartus — early bird piletid juba saadaval.',
    image:
      'https://images.unsplash.com/photo-1454908029086-ecb2c4c2d7d2?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder: festivaliväljak õhtul',
    priceFrom: 55,
    dates: [
      { id: 'trf-1', when: '2027-08-06', time: '16:00', city: 'Tartu', venue: 'Tartu laululava', seated: false },
      { id: 'trf-2', when: '2027-08-07', time: '16:00', city: 'Tartu', venue: 'Tartu laululava', seated: false },
    ],
  },
]

export function getEvent(id) {
  return events.find((e) => e.id === id) ?? events[0]
}

export function getDate(eventId, dateId) {
  const event = getEvent(eventId)
  return event.dates.find((d) => d.id === dateId) ?? event.dates[0]
}

export function allCities() {
  return [...new Set(events.flatMap((e) => e.dates.map((d) => d.city)))].sort()
}

export function formatEtDate(iso) {
  const d = new Date(`${iso}T12:00:00`)
  return new Intl.DateTimeFormat('et-EE', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  }).format(d)
}
