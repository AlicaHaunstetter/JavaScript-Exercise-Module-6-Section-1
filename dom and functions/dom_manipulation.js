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



document.getElementById("meinAbsatz").setAttribute("title", "Tooltiptext");
// im HTML geh zur ID    "   "       .gib dem das Attribut "xy", "inhalt"

document.getElementById("meinAbsatz").classList.add("green_bg");
// im HTML geh zur ID     "   "      .füge die klasse "   " hinzu


document.getElementById("meinAbsatz").classList.add("red_bg");
// Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?

document.getElementById("meinAbsatz").setAttribute("class", "blue_bg");
document.getElementById("meinAbsatz").classList.add("red_bg");
// Beide Befehle werden angewendet. Wenn sich zwei befehle uneinig sind, gewinnt die klasse die zuletzt im css definiert wurde -> blue





function toggleDNone(id) {
    document.getElementById(id).classList.toggle("d-none");
}




function logValue(value) {
    console.log(document.getElementById("alicas_input").value);
    return value;
}





