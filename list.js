class node {
    constructor(data) {
        // the value inside the node
        this.data = data;
        // finds what value comes after
        this.next = null;
    }
}

class linkedList {
    constructor() {
        // our first node 
        this.head = null;
        this.length = 0;
    }
    
    
    append(data) {
        // this will refrence the other class like .next and .data
        const node_ = new node(data);
        
        if(this.head == null) {
            // if theres no head currently do this
            // the head now itself is a node and points to the node obj
            this.head = node_;
        } else {
            // if its already initalized
            while(this.head != null) {
                this.head = this.head.next;
            }
            this.head = node_
        }
         this.length++;
    }
    
   
}

let list = new linkedList();

list.append(5);
list.append(10);


console.log(list);
