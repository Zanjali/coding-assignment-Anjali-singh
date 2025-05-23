//Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.

class Calculator{
    constructor(a,b,operation){
        this.a=a;
        this.b=b;
        this.operation=operation;
    }

    calculate(){
        const operations={
            add:()=>this.a+this.b,
            subtract:()=>this.a-this.b,
            multiply:()=>this.a*this.b,
            divide:()=>this.b!=0 ? this.a / this.b:"can't divided by zero",

        };
        return operations[this.operation]?.()|| "invalid operations";
    }

}
const calc1 = new Calculator(10, 5, "add");
console.log(calc1.calculate());
//op=15

const calc2 = new Calculator(10, 5, "subtract");
console.log(calc2.calculate());
//5

const calc3 = new Calculator(10, 5, "multiply");
console.log(calc3.calculate());
//15

const calc4 = new Calculator(10, 5, "divide");
console.log(calc4.calculate());
//2
 // i have used class and mapping to perform the operations
