class node {
    constructor(data) {
        this.data = data;
        this.next = null; // will have a inner node
    }
}


class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    let current = this.head;
    // the data is pretty much the value we pass
    append(data) {
        const node_ = new node(data);
        if(this.head == null) {
            this.head = node_;
        } else {
            // 
            while(current.next) {
                current = current.next;
            }
            current.next = node_;
        }
        
        this.length++;
    }
    
    
    printList() {
        
    }
    
    removeNode() {
        
    }
    
    addNode() {
        
    }
}


let list = new linkedList();

list.append(5);
list.append(10);
list.append(20);

console.log(list);
