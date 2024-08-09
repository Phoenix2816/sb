let links = document.querySelectorAll(".nav-link");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
}


function onClick() {
    body = document.querySelector("body")
    if (body.classList.contains('body')) {
        body.classList.remove('body')
    } else {
        body.classList.add('body')
    }

}


if (localStorage.getItem("theme") === "dark") {
    document.querySelector(".switch__input").checked = true;
}

function Func() {
    if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");

    }

}


function Func2() {
    body = document.querySelector("body")
    body.classList.remove('body')
    document.getElementById("openSidebarMenu").checked = false;
}