// use localStorage as your db for now

const getDb=()=>localStorage.getItem('cart')
const updateDb=(cart)=> localStorage.setItem('cart',JSON.stringify(cart))

const addToDb =(id)=>{
    const exists= getDb()
    let cart={}
    if(!exists){
        cart[id]=1
    }else{
        cart= JSON.parse(exists)
        if (cart[id]){
            cart[id]= cart[id]+1
        }
        else{
            cart[id]=1
        }
    }
    updateDb(cart)
    
}

const removeFromdb=(id)=>{
    const exists = getDb()
    if(!exists){

    }
    else{
        const cart = JSON.parse(exists)
        delete cart[id]
        updateDb(cart)
    }
}

export {addToDb,removeFromdb};