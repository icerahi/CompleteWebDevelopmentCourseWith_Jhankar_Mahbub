function animalCount(miles){
    const animalesDensityFirst10miles =10;
    const animalesDensitySecond10miles =50;
    const animalesDensityrest =100;
    if(miles <=10){
        const count = miles *animalesDensityFirst10miles;
        return count
    }
    else if (miles <=20){
        const first10=10*animalesDensityFirst10miles;
        const restMiles = miles -10;
        const second10 = restMiles * animalesDensityFirst10miles
        const totalAnimals = first10*second10;
        return totalAnimals
    }
    else{
        const first10=10*animalesDensityFirst10miles;
        const second10 = 10 * animalesDensitySecond10miles
        const restMiles = miles -20;
        const RestDenseAnimal = restMiles *animalesDensityrest;
        const totalAnimals = first10+second10+RestDenseAnimal;
        return totalAnimals
    }
}
const animales = animalCount(35)
console.log(animales);