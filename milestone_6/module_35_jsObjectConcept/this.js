const kibria = {
    id: 101,
    money:5000,
    name: "RJ kibrea",
    treatDeArrow:()=>{
        console.log(this);
    },
    treatDeInside:function(){
            const myArrow=()=> console.log(this)
            myArrow();
    }
    ,
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

function add(){
    console.log(this);
    
}