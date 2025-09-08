class node {
    constructor(data) {
        this.data = data;
        this.next = null; // pointer
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    append(number) {
        const node_ = new node(number);
        
        if(this.head == null) {
            this.head = node_;
        } else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node_;
        }
        
        this.length++;
    }
    
    
    remove() {
        
    }
    
    print() {
        let output = '';
        let current = this.head;
        while(current != null) {
            output = output + current.data + "-->";
            current = current.next;
        }
        output += "null";
        console.log(output);
    }
    
}

let list = new linkedList();
list.append(10);
list.append(5);
list.append(7);
list.append(1);
list.append(19);
list.print();

console.log(list);
