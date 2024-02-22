window.onload = setNavAndFooter().then(() => {
    if(localStorage.getItem("darkMode") == "true") {
        document.getElementById("toggler-button").classList.add('navbar-dark')
    }
})

async function setNavAndFooter() {
    try {
        let res = await fetch("./navbar.html", {
            method: 'GET',
            headers: {
                "content-type": "text/html"
            }
        })
        document.getElementById("navbarPlaceholder").innerHTML = await res.text()
        // This is entirely for development purposes
        // This will only throw if someone moved the navbar location to somewhere else
    } catch (err) {
        console.log(err)
    }
    let footLoc = "https://www.earwig.greenriverdev.com/footer.html";
    try {
        let res = await fetch("/footer.html", {
            method: 'GET',
            headers: {
                "content-type": "text/html"
            }
        })
        document.getElementById("footerPlaceholder").innerHTML = await res.text()
        // This is entirely for development purposes
        // This will only throw if someone moved the navbar location to somewhere else
    } catch (err) {
        alert(`Footer isn't located at ${footLoc}`)
    }
}

function darkMode() {
    document.documentElement.classList.toggle("darkMode")
    document.getElementById("toggler-button").classList.toggle('navbar-dark');
    localStorage.setItem("darkMode", document.documentElement.classList.contains("darkMode"));
}

function swapUserMode() {
    document.getElementById("admin-container").classList.toggle("d-none")
}
