"use strict";

class Car{
    constructor(gasoline, money, wear, clock){
        //konstruktor
        this.gasoline = gasoline;
        this.money = money;
        this.wear = wear;
        this.clock = clock;
        //Panel auta
        this.gasolinePanel = document.getElementById("gasolinePanel");
        this.moneyPanel = document.getElementById("moneyPanel");
        this.wearPanel = document.getElementById("wearPanel");
        //Benzín a Oprava - výběr
        this.gasolineBuySelect = document.getElementById("gasolineBuySelect");
        this.repairBuySelect = document.getElementById("repairBuySelect");
        //Benzín a Oprava - koupě btn
        this.gasolineBuyBtn = document.getElementById("gasolineBuy");
        this.repairBuyBtn = document.getElementById("repairBuy");
        //Auto
        this.startCar = document.getElementById("startCar");
        this.stopCar = document.getElementById("stopCar");
        //Informace o autě
        this.secondOfRun = document.getElementById("secondOfRun");
        this.carInfo = document.getElementById("carInfo");
    }

    //Nastavení výchozího panelu
    panelInfoOnStart(){
        this.gasolinePanel.innerHTML = `Benzín: ${this.gasoline} litrů`;
        this.moneyPanel.innerHTML = `${this.money} Kč`;
        this.wearPanel.innerHTML = `Opotřebení: ${this.wear} %`;
        this.secondOfRun.innerHTML = `Jízda v sekundách: 0`;
        this.carInfo.innerHTML = `Pro jízdu natankujte a opravte auto!`;
    }

    //Koupě benzínu
    buyGasoline(){

        this.gasolineBuyBtn.onclick = () => {
            if(this.gasolineBuySelect.value === "g1" && this.money >= 100){
                this.gasoline += 10;
                this.money += -100;             
            }
            else if(this.gasolineBuySelect.value === "g2" && this.money >= 250){
                this.gasoline += 25;
                this.money += -250; 
            }
            else if(this.gasolineBuySelect.value === "g3" && this.money >= 500){
                this.gasoline += 50;
                this.money += -500; 
            }     
            this.gasolinePanel.innerHTML = `Benzín: ${this.gasoline} litrů`;
            this.moneyPanel.innerHTML = `${this.money} Kč`;
            this.wearPanel.innerHTML = `Opotřebení: ${this.wear} %`;
        } 
    }

    //Oprava auta
    repairCar(){

        this.repairBuyBtn.onclick = () => {
            if(this.repairBuySelect.value === "r1" && this.money >= 100 && this.wear > 0){
                this.wear += -10;
                this.money += -100;             
            }
            else if(this.repairBuySelect.value === "r2" && this.money >= 250 && this.wear > 0){
                this.wear += -25;
                this.money += -250; 
            }
            else if(this.repairBuySelect.value === "r3" && this.money >= 500 && this.wear > 0){
                this.wear += -50;
                this.money += -500; 
            }     
            this.gasolinePanel.innerHTML = `Benzín: ${this.gasoline} litrů`;
            this.moneyPanel.innerHTML = `${this.money} Kč`;
            this.wearPanel.innerHTML = `Opotřebení: ${this.wear} %`;
        } 
    }

    //Auto
    runCar(){

        this.startCar.onclick = () => {
            if(this.gasoline > 0 && this.wear < 100){

                this.carInfo.innerHTML = `Jedeme!`;

                let timerGasoline = setInterval(() => {
                    this.gasoline += -1;
                    this.gasolinePanel.innerHTML = `Benzín: ${this.gasoline} litrů`;
                    if(this.gasoline == 0){
                        clearInterval(timerGasoline);
                        clearInterval(timerWear);
                        clearInterval(timerSecond);
                        this.carInfo.innerHTML = `Stojíme, jsme bez benzínu!`;
                    }
                }, 1000)

                let timerWear = setInterval(() => {
                    this.wear += 1;
                    this.wearPanel.innerHTML = `Opotřebení: ${this.wear} %`;
                    if(this.wear == 100){
                        clearInterval(timerGasoline);
                        clearInterval(timerWear);
                        clearInterval(timerSecond);
                        this.carInfo.innerHTML = `Stojíme, auto se rozbilo!`;
                    }
                }, 1000)

                let timerSecond = setInterval(() => {
                    this.clock += 1;
                    this.secondOfRun.innerHTML = `Jízda v sekundách: ${this.clock}`;
                    if(this.gasoline == 0 || this.wear == 100){
                        clearInterval(timerGasoline);
                        clearInterval(timerWear);
                        clearInterval(timerSecond);
                        this.carInfo.innerHTML = `Stojíme, auto se rozbilo!`;
                    }                  
                }, 1000)

                this.stopCar.onclick = () => {

                    this.carInfo.innerHTML = `Zastavili jsme!`;
                    clearInterval(timerGasoline);
                    clearInterval(timerWear);
                    clearInterval(timerSecond);
                }

            }

        }

    }





    

}

