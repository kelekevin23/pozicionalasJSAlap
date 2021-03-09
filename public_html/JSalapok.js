
//            alert("Helló Világ!");
document.write("Helló Világ a sectionből!");
console.log("Lefutott a JS a sectionban");
//document.getElementById("szoveg").innerHTML = "Bekezdésbe írok!";

szamolas();

function szamolas() {
    var valtozoA = Number(document.getElementById("a").value);
    var valtozoB = Number(document.getElementById("b").value);
    console.log(valtozoA);
    console.log(valtozoB);
    //document.getElementById("szoveg").innerHTML = valtozoA + valtozoB;

    muvelet = document.getElementById("c").value;
    var eredmeny = 0;
    if (muvelet === "+"){
            eredmeny = valtozoA + valtozoB; 
        }
        else if (muvelet === "-"){
            eredmeny = valtozoA - valtozoB;
        }
        else if (muvelet === "*"){
            eredmeny = valtozoA * valtozoB;
        }
        else if (muvelet === "/"){
            eredmeny = valtozoA / valtozoB;
        }else  {
            eredmeny = "Nem megfelelő";
        }
    console.log(eredmeny);
    document.getElementById("eredmeny").innerHTML = "A művelet eredménye: "+ eredmeny;
}

function koszones(){
    neved = document.getElementById("n").value;
    console.log(neved);
    alert("Helló " + neved);
    document.getElementById("neved").innerHTML = "Hello " + neved;
}

/* 
 * if (jel == "+"){
            eredmeny = szam1 + szam2; 
        }
        else if (jel == "-"){
            eredmeny = szam1 - szam2;
        }
        else if (jel == "*"){
            eredmeny = szam1 * szam2;
        }
        else if (jel == "/"){
            eredmeny = szam1 / szam2;
        }
 */

