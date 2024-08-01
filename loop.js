class person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }

    displaydetails(){
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`country: ${this.country}`);
    }
}

const person1=new person('fransico rohan',25,'usa');
const person2=new person('romand aruna',30,'netherlands');

console.log('person-1 details:');
person1.displaydetails();