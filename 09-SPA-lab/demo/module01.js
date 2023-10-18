function sum(a,b){
    return a+b;
}


function product(a,b){
    return a*b;
}

const data={
    firstName:'Lachezar',
    lastName:'Ivanov',
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

export {
    sum,
    product,
    data
}