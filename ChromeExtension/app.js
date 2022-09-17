const firstChild = document.querySelector("h1")
const welcome = document.createElement("h1")
welcome.innerText = "Welcome"
firstChild.parentNode.insertBefore(welcome, firstChild)

