const products = [
    {name:'samsung s2 phone',price:12000},
    {name:'asus laoptop d4r',price:32000},
    {name:'apple smart watch',price:18000},
    {name:'bosundhara binding paper',price:120},
    {name:'lg smart phone',price:10000},
    {name:'old granny land phone',price:100},
]

function searchProducts(products,searchKey){
    const matched = []
    
    for(const product of products){
        if (product.name.indexOf(searchKey) !=-1 ){
                matched.push(product);
        }
    }
    return matched
}

const matched = searchProducts(products,'phone');
console.log(matched);