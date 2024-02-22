console.log("This is a test")
const theme = window.localStorage.getItem("darkMode");
if (theme == "true") {
    console.log("Dark Mode is On")
    document.documentElement.style.backgroundColor = "#333333"
    document.documentElement.classList.add("darkMode");
} else {
    document.documentElement.style.backgroundColor = "#ffffff"
    if (theme == "null") {
        window.localStorage.setItem("darkMode", "false")
    }
}

    // const isDarkMode = localStorage.getItem('darkMode');
    // if (isDarkMode) {
    //     document.documentElement.classList.add('darkMode');
    //     console.log("Dark Mode is On")
    // } else {
    //     console.log("Dark Mode is Not On")
    // }