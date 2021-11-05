export const requared = (value) =>{
    if(value) return undefined;
    return "Field is reqared"
}

export const maxLenghtCreator = (maxLenght)=>(value) =>{
    if(value.lenght > maxLenght) return `Field is ${maxLenght} symbols`;
    return undefined; 
}