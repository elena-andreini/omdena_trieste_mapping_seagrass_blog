// document.getElementById("overview").innerHTML = 5 + 6 + 3;

fetch("introduction.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("overview").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));