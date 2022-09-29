var up = 2;
var timesthru = 0;
let processor = 0;
let Coolingp = 7.5;
let CPUp = 24.25;
let GPUp = 19.25;
let RAMp = 10;
let Motherboardp = 16;
let psuP = 7;
let Storagep = 10;
let casep = 6;
let rem = 0;
let gamer = 'n';
let youtubestreamer = 'n';
let dataStorage = 'n';
let Modeler3dvideoeditor = 'n';
let engineer = 'n';
let programmer = 'n';
let CPUp2 = 0;
let GPUp2 = 0;
let Motherboardp2 = 0;
let RAMp2 = 0;
let psuP2 = 0;
let Storagep2 = 0;
let Coolingp2 = 0;
let casep2 = 0;
let cpuprice = 0;

document.getElementById("AMD").style.display = 'flex';
document.getElementById("Intel").style.display = 'None';
document.getElementById('intelbottom').style.display = 'none';
document.getElementById('amdbottom').style.display = 'flex';
document.getElementById('vertline').style.display = 'none';
document.getElementById('backbtn').style.display = 'none';

function leftClick() {
    document.getElementById('btn').style.left = '0';
    document.getElementById("AMD").style.display = 'flex';
    document.getElementById("Intel").style.display = 'None';
    document.getElementById('intelbottom').style.display = 'none';
    document.getElementById('amdbottom').style.display = 'flex';
}

function rightClick() {
    document.getElementById('btn').style.left = '92px';
    document.getElementById("Intel").style.display = 'flex';
    document.getElementById("AMD").style.display = 'None';
    document.getElementById('intelbottom').style.display = 'flex';
    document.getElementById('amdbottom').style.display = 'none';
}

function someFunction() {
    let val = parseInt(document.getElementById("pricerange").value);
   if (timesthru === 0) {

    document.getElementById('vertline').style.display = 'none';
    document.getElementById('backbtn').style.display = 'none';
    if (val > 749 && val < 10001) {
        document.getElementById("line").style.animation = "loading .5s  forwards cubic-bezier(0, 0, 0, 0)";
        document.getElementById("cont1").style.animation = "fadeout .5s forwards";
        document.getElementById("ask1").style.animation = "fadeout .5s forwards";
        setTimeout(function() {
            document.getElementById("circ2").style.border = '4px solid var(--main-solid)';
            document.getElementById("compoter").style.color = 'var(--main-solid)';
        }, 500);
        setTimeout(function() {
            document.getElementById("1form").style.display = "none";
        }, 500)
        timesthru = 1;
        if (up = 1) {
            document.getElementById("error1").style.animation = "fadeout .5s forwards";
            var up = 2;
            fadein2();
        } else {
            return false;
        }
        return true;
    } else {
        document.getElementById("error1").style.display = 'Block';
        document.getElementById("pricerange").style.animation = "error 1.5s";
        document.getElementById("error1").style.animation = "error2 .5s";
        var up = 1;
    }
    
   } else {
    if(timesthru === 1) {
        timesthru === 2;
       
    if (document.getElementById('GamerCheck').checked) {
        gamer = 'y';
    } else {
        gamer = 'n';
    }
    if (document.getElementById('YtCheck').checked) {
        youtubestreamer = 'y';
    } else {
        youtubestreamer = 'n';
    }
    if (document.getElementById('DataCheck').checked) {
        dataStorage = 'y';
    } else {
        dataStorage = 'n';
    }
    if (document.getElementById('Check3D').checked) {
        Modeler3dvideoeditor = 'y';
    } else {
        Modeler3dvideoeditor = 'n';
    }
    if (document.getElementById('EngineerCheck').checked) {
        engineer = 'y';
    } else {
        engineer = 'n';
    }
    if (document.getElementById('ProgrammerCheck').checked) {
        programmer = 'y';
    } else {
        programmer = 'n';
    }
        if (engineer === 'y') {
            GPUp +=15;
            Motherboardp -=5;
            CPUp -=5;
            RAMp -=5;
        }
        if (dataStorage === 'y') {
            CPUp -=12.5;
            GPUp -=12.5;
            Motherboardp +=10;
            psuP += 5;
            casep +=10;
        }
        if (Modeler3dvideoeditor === 'y') {
            if (CPUp < 20) {
                CPUp +=15;
                GPUp -=5;
                RAMp -=5
                Motherboardp -=5;
            }
            if (GPUp < 15) {
                GPUp +=5;
                CPUp -=5;
                RAMp -=2.5;
                Motherboardp -=2.5;
            }
            if (RAMp < 10) {
                RAMp +=5;
                CPUp -=2.5;
                GPUp -=2.5;
            }
            if (Storagep < 5) {
                Storagep +=5;
                GPUp -=2.5;
                CPUp -=2.5;
            }
        }
        if (programmer === 'y') {
            CPUp +=5;
            Motherboardp -=5;
        }
        if (youtubestreamer === 'y') {
            RAMp +=1;
            Storagep +=2.5;
            Motherboardp -=3.5;
    
        }
        if (gamer === 'y') {
            CPUp -=10;
            GPUp +=5;
            RAMp +=5;
        }
        let t = 0;
        let u = 0
        if (gamer === 'n' && youtubestreamer === 'n' && programmer === 'n' && Modeler3dvideoeditor === 'n' && dataStorage === 'n' && engineer === 'n') {
        document.getElementById("error2").style.display = 'Block';
        document.getElementById("error2").style.animation = "error2 .5s";
        t = 1;
        u = 1;
        } else {
            t = 0;
        }

const CPUp2 = (parseInt(document.getElementById("pricerange").value) * CPUp) / 100;  
const GPUp2 = (parseInt(document.getElementById("pricerange").value) * GPUp) / 100;  
const Motherboardp2 = (parseInt(document.getElementById("pricerange").value) * Motherboardp) / 100;  
const RAMp2 = (parseInt(document.getElementById("pricerange").value) * RAMp) / 100;  
const psuP2 = (parseInt(document.getElementById("pricerange").value) * psuP) / 100;  
const Storagep2 = (parseInt(document.getElementById("pricerange").value) * Storagep) / 100;
const Coolingp2 = (parseInt(document.getElementById("pricerange").value) * Coolingp) / 100;    
const casep2 = (parseInt(document.getElementById("pricerange").value) * casep) / 100;  
const cpuprice = 'Reccommended Amount: $' + CPUp2;
const pcnums= [CPUp2, GPUp2, Motherboardp2, RAMp2, psuP2, Storagep2, casep2, val, Coolingp2];
const pcnums2 = [CPUp, GPUp, Motherboardp, RAMp, psuP, Storagep, casep, Coolingp];
        fadeout2(pcnums2 , t, u, cpuprice);
        timesthru = 2;
    } else {
        if(timesthru === 2) {
            let l = 0;
            if (processor == 0) {
                document.getElementById("error3").style.display = 'Block';
                document.getElementById("error3").style.animation = "error2 .5s";
                l = 1;
            } else {
                if (l == 0) {
                    document.getElementById("line").style.animation = "loading3 .5s  forwards cubic-bezier(0, 0, 0, 0)";
                    document.getElementById("form3").style.animation = "fadeout .5s forwards";
                } else {
                    document.getElementById("error3").style.animation = "fadeout .5s forwards";
                    document.getElementById("line").style.animation = "loading3 .5s  forwards cubic-bezier(0, 0, 0, 0)";
                    document.getElementById("form3").style.animation = "fadeout .5s forwards";
                }
            }
            setTimeout(function(){
                document.getElementById("form3").style.display = 'none';
                document.getElementById("circ4").style.border = '4px solid var(--main-solid)';
                document.getElementById("MotherboardMark").style.color = 'var(--main-solid)';
            }, 500);
   } 
    }
}


   function fadein3(pcnums2, cpuprice) {
    setTimeout(function () {
        sofar(pcnums2, cpuprice);
    }, 500);

    function sofar(pcnums2, cpuprice) {
        document.getElementById("form3").style.display = 'flex';
        document.getElementById("form3").style.animation = "error2 .5s forwards";
        document.getElementById('spendtext').innerHTML = cpuprice;
    }
         // Mark processors, that have the closest price, as recommended:
        function markClosest(theClass, limit) {
            let
                closestAboveEle = null,
                closestBelowEle = null,
                closestReccommendedEleAbove = null,
                closestReccommendedEleBelow = null,
                closestAbovePrice = 9999,
                closestBelowPrice = 0;
            // Loop through all labels:
            document.querySelectorAll('.' + theClass + ' label').forEach((item, idx) => {
                const
                    // Element containing the price:
                    priceEle = item.querySelector('.price'),
                    price = parseFloat(priceEle.textContent.replace('$', '')),
                    // Element containing the marker "reccommended":
                    reccommendedEle = item.querySelector('.reccommended');
                // Is the price below the limit?
                if (price < limit) {
                    // Is the price above the closest price below?
                    if (price > closestBelowPrice) {
                        // Note elements and price for "below":
                        closestBelowPrice = price;
                        closestBelowEle = priceEle;
                        closestReccommendedEleBelow = reccommendedEle;
                    }
                } else {
                    if (price < closestAbovePrice) {
                        closestAbovePrice = price;
                        closestAboveEle = priceEle;
                        closestReccommendedEleAbove = reccommendedEle;
                    }
                }
                reccommendedEle.classList.remove('visi');
            });
            // Add class "visi" for the markers of the closest elements:
            if (closestReccommendedEleAbove) closestReccommendedEleAbove.classList.add('visi');
            if (closestReccommendedEleBelow) closestReccommendedEleBelow.classList.add('visi');
        }
        markClosest('intellist', CPUp2);
        markClosest('amdlist', CPUp2);
}

function fadeout2(pcnums2, t, u, cpuprice) {
   if (t === 0) {
    document.getElementById("line").style.animation = "loading2 .5s  forwards cubic-bezier(0, 0, 0, 0)";
    document.getElementById("form2").style.animation = "fadeout .5s forwards";
    if (u === 1) {
        document.getElementById("error2").style.animation = "fadeout .5s forwards";
        setTimeout(function() {
            document.getElementById("error2").style.display = "none";
        }, 500);
    }
    setTimeout(function() {
        document.getElementById("form2").style.display = 'none';
        document.getElementById("circ3").style.border = '4px solid var(--main-solid)';
        document.getElementById("CPUmark").style.color = 'var(--main-solid)';
    }, 500);
    fadein3(pcnums2, cpuprice);
   }
}

}

function fadein2() {
    setTimeout(function () {
        document.getElementById("form2").style.display = 'flex';
        document.getElementById("form2").style.animation = "error2 .5s forwards";
        document.getElementById('vertline').style.display = 'block';
        document.getElementById('backbtn').style.display = 'block';
    }, 500);
}

window.addEventListener('change', event => {
    if (event.target.matches('.intellist input')) {
        let checkedRb = document.querySelector('.intellist input:checked');
        processor = checkedRb.value;
    }
    if (event.target.matches('.amdlist input')) {
        checkedRb = document.querySelector('.amdlist input:checked');
        processor = checkedRb.value;
    }
})
