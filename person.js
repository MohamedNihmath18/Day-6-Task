class Person{
    constructor(name,age,gender,martialStatus){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.martialStatus=martialStatus;
    }
    getName(){
        return `Hello Guvi ! I am ${this.name}, And My Age and Gender is ${this.age}, ${this.gender},And I am ${this.martialStatus}`;
    }
}

var p1=new Person("Nihmath","23","Male","Single");
console.log(p1.getName());