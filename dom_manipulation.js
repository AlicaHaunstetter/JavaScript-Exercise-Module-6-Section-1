let title = document.getElementById('website_title');
title.innerHTML = "neuer Titel"

document.getElementById("test_div").innerText = "<p>test</p>";




document.getElementById("java_button").innerText = "Klick mich";

document.getElementById("test_div").classList.add("green_bg");
document.getElementById("test_div").classList.remove("green_bg");
document.getElementById("test_div").classList.toggle("green_bg");


// document.getElementById("test_input").setAttribute("type", "text");
// document.getElementById("test_input").setAttribute("value", 123);


console.log(document.getElementById("test_input").value);