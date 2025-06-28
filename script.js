function rechnen() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let input4 = parseInt(document.getElementById("input4").value);

    let sum = input1 + input2 + input3 + input4;
    let prozent = ((sum / 700) * 100).toFixed(1);
    let result;

    if (prozent >= 57 && prozent <= 66) {
        result = "DSH1 mit % " + prozent;
    } else if (prozent >= 67 && prozent <= 81) {
        result = "DSH2 mit % " + prozent;
    } else if (prozent >= 82 && prozent <= 100) {
        result = "DSH3 mit % " + prozent;
    } else {
        sonuc = "Leider sind " + prozent + " Prozent für DSH nicht ausreichend.!";
    }

    document.getElementById("sonuc").innerHTML = result;

}
