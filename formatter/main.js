const params = new URLSearchParams(window.location.search);
let ts = params.get("ts");
const result = document.getElementById("result");
const mode = document.getElementById("select");
const copyBtn = document.getElementById("copyBtn");
(async () => {
  if (!ts || isNaN(ts)) {
    const input = document.getElementById("ts");
    input.style.display = "";
    ts = await new Promise((res, rej) => {
      input.addEventListener("change", (ev) => {
        res(input.value);
        input.style.display = "none";
      });
    });
  }
  copyBtn.disabled = false;
  result.textContent = format(ts, mode.value);
})();


mode.addEventListener("change", () => {
  result.textContent = format(ts, mode.value);
})

copyBtn.addEventListener("click", () => {
  copy(copyBtn)
})

function format(int, mode) {
  return `<t:${int}:${mode}>`;
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