
// ['manna','sani','sakib','manna']
// {manna:2,sani:1,sakib:2}

const addToDb = item =>{
    const db =getDb();
    if (item in db){
        db[item]=db[item]+1
    }else{
        db[item]=1
    }
    
    saveToDb(db);
}
const removeFromDb = item =>{
    const db =getDb();
    delete db[item]
    saveToDb(db);

}
const saveToDb = db =>{
    localStorage.setItem('shopping-cart',JSON.stringify(db))
}
const getDb = ()=>{
    const savedDb = localStorage.getItem('shopping-cart');
    return savedDb?JSON.parse(savedDb):{}
}

export {addToDb,removeFromDb,getDb};

/* 
const adddb =item =>{
    let db = getdb()
    if(item in db){
        db[item]=db[item]+1
    }
    else{
        db[item]=1
    }
    savedb(db)
}
const removedb = item =>{
    const db = getdb()
    delete db[item]
    savedb(db)
}
const savedb=db=>{
    localStorage.setItem('cart',JSON.stringify(db))
}
const getdb=()=>{
    savedb = localStorage.getItem('cart')
    return savedb?JSON.parse(savedb):{}
} */