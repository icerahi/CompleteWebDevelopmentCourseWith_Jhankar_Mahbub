
var color="blue";
if (color=='blue'){
    console.log("color is blue");
}

else if(color=='red'){
    console.log('color is',color);
}
else if(color=='green'){
    console.log('color is',color);
}
else if (color=='white'){
    console.log('color is ',color);
}
else{
    console.log('color is black');
}

switch(color){
    case 'blue':
        console.log('color is',color);
        break;
    case 'red':
        console.log('color is',color);
        break;
        
    case 'white':
        console.log('color is',color);
        break;
    default:
        console.log('color is black');
}