const kibria = {
    id: 101,
    money:5000,
    name: "RJ kibrea",
    treatDe:function(expense){
        this.money -=expense;
        console.log(this);
        return this.money 
    }
  };

  const heroBalam = {
      id:102,
      money:6000,
      name:"Hero Balam",

  }
  const normalGolam = {
    id:103,
    money:8000,
    name:"normal Golam",

}
kibria.treatDe(100)
const heroTreatDe = kibria.treatDe.bind(heroBalam)
const normalTreatDe = kibria.treatDe.bind(normalGolam)
heroTreatDe(500);
heroTreatDe(300)
heroTreatDe(200)
kibria.treatDe(900)
normalTreatDe(500)