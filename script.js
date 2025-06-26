function toggleMode() {
  const html = document.documentElement

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }
  //}

  // Alterna a classe "light"
  html.classList.toggle("light")

  // Salva a preferência no localStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}

// Quando a página carregar, aplica o tema salvo
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme")
  const html = document.documentElement

  if (savedTheme === "light") {
    html.classList.add("light")
  } else {
    html.classList.remove("light")
  }
})
