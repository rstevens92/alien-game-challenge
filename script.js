const attackButton = document.querySelector(".attack-button");
const resetButton = document.querySelector(".reset-button");

class spaceShip {
    constructor(name, healthPoints, pointsWhenHit, domSelector) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.pointsWhenHit = pointsWhenHit;
        this.domSelector = domSelector;
    }
    isSpaceShipDead(){
        if (this.healthPoints <= 0){
            return true;
        }
        return false;
    }
    takeHP() {
        this.healthPoints -= this.pointsWhenHit;
    }
    updateHTML() {
        this.domSelector.innerHTML = `${this.name}<br>${this.healthPoints}hp`
    }
    deadSpaceship() {
        if (this.healthPoints <= 0){
            this.domSelector.innerHTML = "Spaceship Down!";
        } 
    }
    killThisShip(){
        this.healthPoints = 0;
        this.domSelector.innerHTML = "Spaceship Down!";    
    }
}

    let mothership = new spaceShip("Mothership", 100, 9, document.getElementById("mothership1"))
    let defenceShip1 = new spaceShip("Defence Ship", 80, 10, document.getElementById("defence-ship-1"))
    let defenceShip2 = new spaceShip("Defence Ship", 80, 10, document.getElementById("defence-ship-2"))
    let defenceShip3 = new spaceShip("Defence Ship", 80, 10, document.getElementById("defence-ship-3"))
    let defenceShip4 = new spaceShip("Defence Ship", 80, 10, document.getElementById("defence-ship-4"))
    let defenceShip5 = new spaceShip("Defence Ship", 80, 10, document.getElementById("defence-ship-5"))
    let attackShip1 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-1"))
    let attackShip2 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-2"))
    let attackShip3 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-3"))
    let attackShip4 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-4"))
    let attackShip5 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-5"))
    let attackShip6 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-6"))
    let attackShip7 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-7"))
    let attackShip8 = new spaceShip("Attack Ship", 45, 12, document.getElementById("attack-ship-8"))

    let spaceShipsArr = [mothership,defenceShip1,defenceShip2,defenceShip3,defenceShip4,defenceShip5,attackShip1,attackShip2,attackShip3,attackShip4,attackShip5,attackShip6,attackShip7,attackShip8]

export const attackSpaceShips = () => {

    const chooseSpaceShip = () => {
        const getRandomIndex = Math.floor(Math.random() * spaceShipsArr.length)
        console.log(spaceShipsArr[getRandomIndex]);
        return spaceShipsArr[getRandomIndex];
    }

    let getSpaceShip = chooseSpaceShip();

    while (getSpaceShip.isSpaceShipDead() === true){
        getSpaceShip = chooseSpaceShip();
        if (getSpaceShip.isSpaceShipDead() === false)
        break;
    }

        getSpaceShip.takeHP();
        getSpaceShip.updateHTML();
        getSpaceShip.deadSpaceship();
        
    if (mothership.healthPoints <= 0){
        spaceShipsArr.forEach(shipToKill => shipToKill.killThisShip());
    }
}

attackButton.addEventListener("click", attackSpaceShips);
const reset = () => location.reload();
resetButton.addEventListener("click", reset);