import { initMotion } from './motion.js'
import { markCurrentNav, qs, toast } from './ui.js'
import './styles.css'

markCurrentNav()
initMotion()

qs('#inquiry').addEventListener('submit', (e) => {
  e.preventDefault()
  toast('Demo: päring salvestati ainult selles brauseris — midagi ei saadetud.')
  e.target.reset()
})
