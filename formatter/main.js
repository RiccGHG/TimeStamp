const params = new URLSearchParams(window.location.search);
let ts = params.get("ts");
const result = document.getElementById("result");
const mode = document.getElementById("select");
(async () => {
  if (!ts || isNaN(ts)) {
    const input = document.getElementById("ts");
    input.style.visibility = "";
    ts = await new Promise((res, rej) => {
        input.addEventListener("change", (ev) => {
            res(input.value);
            input.style.visibility = "hidden";
        })
    });

    result.textContent = format(ts, mode.value);
  }
})();

function format(int, mode) {
  return `<t:${int}:${mode}>`;
}
