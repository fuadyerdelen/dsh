function Rechnen() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let input4 = parseInt(document.getElementById("input4").value);

    let toplam = input1 + input2 + input3 + input4;
    let yuzde = ((toplam / 700) * 100).toFixed(1);
    let sonuc;

    if (yuzde >= 57 && yuzde <= 66) {
        sonuc = "DSH1 mit % " + yuzde;
    } else if (yuzde >= 67 && yuzde <= 81) {
        sonuc = "DSH2 mit % " + yuzde;
    } else if (yuzde >= 82 && yuzde <= 100) {
        sonuc = "DSH3 mit % " + yuzde;
    } else {
        sonuc = "Leider sind " + yuzde + " Prozent für DSH nicht ausreichend.!";
    }

    document.getElementById("sonuc").innerHTML = sonuc;

}