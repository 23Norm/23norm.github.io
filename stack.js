export default class Stack {
    constructor() {
        this.size = 5
        this.array = []
        this.current;
    }

    empty() {
        if (this.array.length == 0) {
            return "Stack is empty"
        } else {
            return "Stack is not empty"
        }
    }


    getCurrent(){
        return this.current;
    }

    getStack() {
        return this.array
    }

    insert(value) {
        if(this.array.length == this.size){
            return "Stack Overflow"}
        
            else{
        this.array.push(value)
        this.current = this.array.length - 1;
        }
    }

    remove() {
        if(this.array.length== 0){
            return "Stack Underflow"
        }

        else{
            this.array.pop()
            this.current = this.array.length - 1;
        }
    }
}


