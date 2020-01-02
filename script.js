let pieCount = 0;
let piesPerClick = 1;
let bakerUpgrades = 0;
let robotUpgrades = 0;
let PiesPerSec = 0;

window.onload = function(){
    
    if (localStorage.getItem("pieCount")){
        changePies(localStorage.getItem("pieCount"));
    }
    if(localStorage.getItem("piesPerClick")){
        piesPerClick = parseInt(localStorage.getItem("piesPerClick"))
        document.getElementById("piesPerClick").innerHTML = piesPerClick;
    }
    if(localStorage.getItem("bakerUpgrades")){
        bakerUpgrades = parseInt(localStorage.getItem("bakerUpgrades"));
        for(var i = 0; i < bakerUpgrades; i++){
            this.addBaker();
        }
        
    }
    if (localStorage.getItem("robotUpgrades")){
        robotUpgrades = parseInt(localStorage.getItem("robotUpgrades"));
        for (var i = 0; i < robotUpgrades; i++){
            addRobot();
        }

    }
    setInterval(
        function(){
            PiesPerSec = Math.ceil((bakerUpgrades + robotUpgrades*5)/30);
            changePies(PiesPerSec);
        },500
    );    
}

console.log("Script is working");

function clickPie(){
    console.log("Pie has been clicked!");
    changePies(piesPerClick);
}

function changePies(number){
    number = parseInt(number);
    if (pieCount + number >= 0){
        pieCount = pieCount + number;
        localStorage.setItem("pieCount",pieCount);
        console.log("Number of pies: " + pieCount);
        document.getElementById("pieCounter").innerHTML = pieCount;
        return 0;
    }else{
        console.log("Not enough pies.");
        return 1;
    }
}

function addBaker(){
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src","images/dabbingchef.jpg");
    imageElement.setAttribute("height", "110")
    imageElement.setAttribute("width", "100")
    var destination = document.getElementById("bakerDestination");
    destination.appendChild(imageElement);
}

function addRobot(){
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src","images/robot.png");
    imageElement.setAttribute("height", "110")
    imageElement.setAttribute("width", "100")
    var destination = document.getElementById("robotDestination");
    destination.appendChild(imageElement);
}


function upgradeClicker(upgradeAmount, upgradeCost){
    let changePiesError = -1;
    changePiesError = changePies(-upgradeCost);
    if (changePiesError == 0){
        //piesPerClick = parseInt(piesPerClick) + parseInt(upgradeAmount)
        piesPerClick+= parseInt(upgradeAmount);
        localStorage.setItem("piesPerClick", piesPerClick);
        document.getElementById("piesPerClick").innerHTML = piesPerClick;
        
        if (upgradeAmount == 1){
            bakerUpgrades++;
            localStorage.setItem("bakerUpgrades", bakerUpgrades);
            addBaker();
        }
        if (upgradeAmount == 5){
            robotUpgrades++;
            localStorage.setItem("robotUpgrades", robotUpgrades);
            addRobot();
        }

    }
}

function reset(){
    document.getElementById("pieCounter").innerHTML = 0;
    document.getElementById("piesPerClick").innerHTML = 0;
    pieCount = 0;
    piesPerClick = 1;
    bakerUpgrades = 0;
    robotUpgrades = 0;
    PiesPerSec = 0;
    localStorage.setItem("robotUpgrades", robotUpgrades);
    localStorage.setItem("bakerUpgrades", bakerUpgrades);
    localStorage.setItem("pieCount",pieCount);
    localStorage.setItem("piesPerClick", piesPerClick);
}



