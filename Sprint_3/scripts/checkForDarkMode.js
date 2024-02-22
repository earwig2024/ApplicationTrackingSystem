console.log("This is a test")
const theme = window.localStorage.getItem("darkMode");
console.log(theme)
if (theme == "true" || theme == null) {
    console.log("Dark Mode is On")
    document.documentElement.style.backgroundColor = "#333333"
    document.documentElement.classList.add("darkMode");
    if (theme == null) {
        window.localStorage.setItem("darkMode", "true");
    }
}

    // const isDarkMode = localStorage.getItem('darkMode');
    // if (isDarkMode) {
    //     document.documentElement.classList.add('darkMode');
    //     console.log("Dark Mode is On")
    // } else {
    //     console.log("Dark Mode is Not On")
    // }