const kibria = {
    id: 101,
    money:5000,
    name: "RJ kibrea",
    treatDe:function(expense,boksis,tax){
        this.money -=expense+boksis+tax;
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
//with bind
// kibria.treatDe.bind(heroBalam)(500,100,50)
// kibria.treatDe.bind(heroBalam)(800,100,30)

//with call [give param with comma separate]
kibria.treatDe.call(heroBalam,500,100,50)
kibria.treatDe.call(heroBalam,800,100,30)

//with apply[give param with array]
kibria.treatDe.apply(heroBalam,[500,100,50])
kibria.treatDe.apply(heroBalam,[1000,200,100])

kibria.treatDe.apply(normalGolam,[1000,200,100])
