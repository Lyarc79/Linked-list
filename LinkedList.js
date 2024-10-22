
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    tail(){
        if(!this.head) return null;
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        return current;
    }

    at(index){
        if(index < 0 || index >= this.size) return null;
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.nextNode;
        }
        return current;
    }

    pop(){
        if(!this.head) return null;
        else if(!this.head.nextNode){
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        while(current.nextNode.nextNode){
            current = current.nextNode;
        }
        current.nextNode = null;
        this.size--;
    }

    contains(value){
        let current = this.head;
        while(current) {
            if(current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value){
        let current = this.head;
        for(let i = 0; i < this.size; i++){
            if(current.value === value){
                return i;
            }
            current = current.nextNode;
        }
        return null;
    }

    toString(){
        let current = this.head;
        let result = '';
        while(current){
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }

    insertAt(value, index){
        const newNode = new Node(value);
        if(index === 0){
            newNode.nextNode = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let i = 0;
            while(i < index && current !== null){
                previous = current;
                current = current.nextNode;
                i++;
            }
            previous.nextNode = newNode;
            newNode.nextNode = current;
        }
        this.size++;
    }

    removeAt(index){
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        if(index === 0){
            this.head = current.nextNode;
        } else {
            let previous = null;
            let i = 0;
            while(i < index){
                previous = current;
                current = current.nextNode;
                i++;
            }
            previous.nextNode = current.nextNode;
        }
        this.size--;
        return current.value;
    }    
}

// This is the node creation class for the LinkedList class
class Node{
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
}

module.exports = LinkedList;
