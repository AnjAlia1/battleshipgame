var gameeOver = false;
var i = 0;
var target_to_win = 8;
count_ship = 0;
count_water = 0;
let for_score_in_num = document.getElementById('for_score');
playerScore = Number('for_score');
playerScore = 0;

let for_ship = document.querySelectorAll('.forship');
for_ship.forEach(shipclass => {
    shipclass.classList.add("ship");
    let leaf = document.createElement('img');
    shipclass.appendChild(leaf);
    leaf.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAbFBMVEX///8jHyAAAAAgHB3l5eXCwME0MDE3NDUuLC0REBEUDQ+urq4jHR9paGj5+fn8/Pzw8PBvbm53dnYIAAAbFhi2trbU1NTe3t5ZWFgpJSbLyssNAwdMS0tCQEEXFRZhYGB/f3+Tk5OioqKJiIgUEeh5AAAEzElEQVR4nO2Zi5KrKBCGBbwQvKGiCd417/+Op9uYRM3umbNhZrNVy1dTDpAZ+YHupiGOY7FYLBaLxWKxWCwWi8VisVgsln8B16s999MikJAKWn5aBBJSYoXssEKOlCDE+6wEOebARZH+ki9k82eEuLpomkYRQvpmgWYfEuIzskV16UeFCAoIQlhx/oyOVYjIyzAsxyYS4Yd0rELoMg9nygLccdwnEqrJpv7jQiosVzchE+EPtHRkp5/V8aeFbGZEtordiSC61PRRZSqQPyukv0zARaxCnk6EQppnlf20ENLToih68nkhj44WIdEd3IFgaR71nxeiCogjtxlxJnp6wNFYi0eVjj+lYxWiFhsZ1CIkPbiv3NST/X/LcMdsEJX3XhMF/yhSuB3dcXpfx1/FEek9wfZqU9/prGExt1CTsLwVcosjab4d5Nlx2b3cMHrZTH4oWLTVwbTJPnUTcspxifOXOBKh1xRrd34HPL3mSvf7NhiagY6715wgjsDu+7s4wrrAD9q7EBlTcsAs2dzEER38XkgA3IW4w4sOxo1ijMt7tcI1OXHXSVpxb+nVstdAgQV9rwKfrAHt3DdHHUSMJjocN76sDAM8MjDW8lEbhixJnBwrw4CPdk4TaCkpB1HHlamNhDjJipSJxEeSpFiRWJcSyqmzlqE5WXTMBfcDfsgxWWOm40tegmUyCu2DuRwnZHqzg6SNt2RAHue3Aj7y5WcljrEMH8PzUnQ64IEmWm8nhFXvDpUXYgvXnIhACbRZDjVfK19pzYiGBvxYM+ULP2I+6zQqIT7fCFHtuzqc+eCAHDtdCtAz4VCGX5pxtoycYePapJe/3s8Iff9cVu03CjMYfT+IJJ36uoM/RcQGGcD4GpTexii81y9R2kBI8nV/f4vk7Ose/gwRG+hwnFx8lxDD8F5+19qoziy5T75LSHE10uE47Tc5MDU9nB+D65uo1sRnkErt/IbdrmtefGlpL15mj6lmyahJY37tts2TFeX5XNfhqOk2OY8a2l7D2pvj/eGBURFPXl1OcLYxP4dei/t7Rd96EtMkvGg8PSaFFTqvEifF9qp9huK+8WcwDEiVnCQ0yt5vVDcjYQ3NIJ04Txeu20k+/FrRZgZ13tjyICudNH60dyUkbnPWRV1+dkwtBJCBwtdGV+kkZUAbxRgcx2tUEkWCtnB0c69gNtAu6EU6uE+ygsYQv6qBFv3S/m5qtmOkhehg1MncUdTUgE2yU+UMlJKhTp1zrvEcJQqwSRpD6tA0HObA8YYGwrISeBP5LUrKboLRyYlTFcHRsp1AEOm7tIpDMIE6Qx9SlObztWB4th1HDxYibEE1zBi/zhm9H1iNkV6MPshoMC1xaSxum/p59nG8PR1CzDXOnDE87ScVrBXIKPps6d+jRBhfVrsVeGWH3akimFcnlAFjQXm9EFwrcbrUa8oD0Y/C+bg9wVqxho33E3cmmDL03xLjF8Q0MDj0gjsTWCrYbRThmjxnHXcmtFtsP83PoF42xiE+wztvUOFnu0VOAxyzQovZjXSityjbD+XWYSsqTCNaSIVgPHv5flOOrCfdVB1en+Qn0ZMhPN6CTIHxd07n+tjZSnq8LLvhVv+J72QtFovFYrFYLBaLxWKxWCwWi+X/yC/pDVYbV9iQYgAAAABJRU5ErkJggg==");
    leaf.style.visibility = 'hidden';

    shipclass.onclick = () => {
        if (gameeOver || count_water === 3) {
            alert("you loose");
            return;
        }
        leaf.style.visibility = 'visible';
        count_ship++;
        calculateScore(2);
        disabled = false;

    }
});

/*FOR WATER*/

let for_water = document.querySelectorAll('.forwater');

for_water.forEach(waterclass => {
    waterclass.classList.add("water");
    let win = document.createElement('img');
    waterclass.appendChild(win);
    win.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRpBv8LIBH7MkL3N2v7cVRZW_h00-X2wxTw&usqp=CAU");
    win.style.visibility = 'hidden';
    waterclass.onclick = () => {
        if (count_water === 3 || gameeOver) {
            gameeOver = true;
            alert("you loose");
            return;
        }
        count_water += 1;
        win.style.visibility = 'visible';
        calculateScore(-1);
    }
});

/*RESET*/

let allclear = document.getElementById("resetbutton");
allclear.onclick = () => {
    count_ship = 0;
    count_water = 0;
    gameeOver = false;
    playerScore = 0;
    visibilityChange();
    for_score_in_num.innerHTML = playerScore;
    document.getElementById("message").innerHTML = "Let's play again 😊😊😊";
}
visibilityChange = () => {
    let allcl = document.querySelectorAll('img');
    allcl.forEach(img => img.style.visibility = "hidden");
}


function calculateScore(value) {
    var currentScore = playerScore + value;
    var requiredScore = target_to_win - currentScore;
    playerScore = currentScore;
    for_score_in_num.innerHTML = playerScore;
    if (playerScore < target_to_win) {
        document.getElementById("message").innerHTML = "You need " + requiredScore + " to win 😊😊😊";
    }
    if (playerScore === target_to_win) {
        document.getElementById("message").innerHTML = "You win 😊😊😊";
        alert("you win");
        gameeOver = true;
    }
}















