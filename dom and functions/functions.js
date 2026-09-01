
//AUFGABE 01

// Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt,
// sie zusammenfügt zu einem einzigen String und diesen zurückgibt(returned).
// Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann


console.log(fullName('Max ', 'Mustermann'));

function fullName(Vorname, Nachname) {
    let value = (Vorname + Nachname);
    return value;
}


//AUFGABE 02

// Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt, 
// jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.
// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

console.log(capitalizeLetters('bAnanE'));

function capitalizeLetters(word) {
        let text = (word.toUpperCase());
return text;
}

// undefined :(


// 03 Aufgabe
// Erstelle eine Funktion namens "countCharacters", 
// die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.
// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6


console.log(countTheCharacters('banana'));

function countTheCharacters(myWord) {
    let value = (myWord.length);
    return value;
}



// Knacker-Aufgabe
// Erstelle eine Funktion namens "formatToCurrency", 
// die eine Dezimalzahl als Parameter übernimmt 
// und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode, 
// um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.
// Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"


// console.log(formatToCurrency(0.5));



console.log(formatToCurrency(0.5));

function formatToCurrency(number) {
    let fixed = number.toFixed(2);
    let withComma = fixed.replace('.', ',');
    return withComma + "€";
}
