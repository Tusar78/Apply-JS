// Wood Calculator
const woodCalculator = (chairQuantity,tableQuantity,bedQuantity)=>{
    const perChairWood = 5
      , perTableWood = 10
      , perBedWood = 30;

    const chairWoodQuantity = chairQuantity * perChairWood
      , tableWoodQuantity = tableQuantity * perTableWood
      , bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
;

const tusarNeed = woodCalculator(5, 1, 2);
console.log(tusarNeed);
