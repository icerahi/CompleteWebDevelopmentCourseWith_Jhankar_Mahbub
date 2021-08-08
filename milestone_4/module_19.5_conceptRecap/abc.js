
// core concepts
// variable (let,const) javascript var,let,const
//array,loop(while,for),conditionals,function


//New Home work
//1 . celciusToFarenhiet()
function celciusToFarenhiet(celcius){
    return celcius*(9/5)+32
}
// console.log(celciusToFarenhiet(100));

//2. farenheitToCelcius()
function farenheitToCelcius(farenheit){
    return 5/9*(farenheit-32)
}
// console.log(farenheitToCelcius(1));

//3.grade calculation
function Grade(mark){
    if (mark<=100 && mark>=80){
        console.log("A+")
    }
    else if(mark<=79 && mark>=70){
        console.log("A")
    }
    else if(mark<=69 && mark>=60){
        console.log("A-")
    }
    else if(mark<=59 && mark>=50){
        console.log("B")
    }
    else if(mark<=49 && mark>=40){
        console.log("C")
    }
    else if(mark<=39 && mark>=33){
        console.log("D")
    }
    else{
        console.log('fail')
    }
}
Grade(69)
//  function Grade(mark){
//      switch(true){
//          case (mark<=100 && mark>=80):
//              console.log('A+')
//              break;         
//         case (mark<=79 && mark>=70):
//              console.log('A')
//              break;
//         case (mark<=69 && mark>=60):
//             console.log('A-')
//             break;       
//         case (mark<=59 && mark>=50):
//             console.log('B')
//             break;        
//         case (mark<=49 && mark>=40):
//             console.log('C')
//             break;       
//         case (mark<=39 && mark>=33):
//             console.log('D')
//             break;
//         default:
//             console.log("Fail")
//      }
//  }
//  Grade(91)

//4.simple interest

/* formula amount = p(1+rt)
p = principle 
r = interest rate (10/100)
t = time in year
*/

function Interest(p,r,t){
    let amount = p*(1+r*t)
    return amount
}
console.log(Interest(48000,10/100,4));