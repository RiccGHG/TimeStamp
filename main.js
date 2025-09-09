
function time() {
  const inMs = document.getElementById('mode').checked
  const txt = document.getElementById('result')
  let timeEl = document.getElementById('time');
  const copyBtn = document.getElementById('copyBtn');
  if (!timeEl.value) { 
    copyBtn.disabled = true
    copyBtn.style.background = 'lightgray'
    txt.textContent = "Select a date."
    timeEl.style.border = '2px solid red'
    timeEl.style.borderRadius = "2px"
    setTimeout(() => {
      timeEl.style.border = "1px solid grey"
    }, 1000 * 3)
    return;
  }
  copyBtn.disabled = false
  copyBtn.style.background = 'darkgray'
  timeEl = timeEl.value;
  const [datePt, timePt = '00:00'] = timeEl.split('T')
  const [y, m, d] = datePt.split('-').map(Number)
  const [hh, mm] = timePt.split(':').map(v => Number(v))
  const date = new Date(y, m - 1, d, hh, mm, 0, 0).getTime()
  if (inMs) {
    txt.textContent = date;
    return;
  }
  const s = Math.floor(date / 1000)
  txt.textContent = s
}
function copy(btn) {
  const txt = btn.parentElement.querySelector('div').innerText;
  navigator.clipboard.writeText(txt).then(() => {
    btn.textContent = 'Copied!'
    setTimeout(() => {
      btn.textContent = 'Copy'
    }, 1000*3)
  })
}