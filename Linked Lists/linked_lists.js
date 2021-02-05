// index.js 

// linear data structure, ordered collection of data 
// unlike arrays, the nodes are not stored in sequential location -> they're linked to each other 

// there's a head, has two parts -- the data, reference to the next node 
// the tail, the reference is to null (that's how u know it's the tail)


const n1 = {
    data: 100 
}

const n2 = {
    data: 200
}

n1.next = n2 
console.log(n1)

// now let's make classes

class Node {
    constructor(data, next = null){
        this.data = data 
        this.next = next
    }
}

const n1 = new Node(100)
console.log(n1)

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }
}

// insert first node 
insertFirst(data){
    this.head = new Node(data, this.head)
}

const ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)


// print list data 

printListData() {
    let current = this.head 
    while(current){
        console.log(current.data)
        current = current.next
    }
}

// insert last node 

insertLast(data){
    let node = new Node(data)
    let current;

    // if empty, make head
    if(!this.head){
        this.head = node 
    } else {
        current = this.head;

        while(current.next){
            current = current.next
        }

        current.next = node 
    }
    this.size++
}

ll.insertLast(400)

// insert at index 

insertAt(data, index){
    // if index is out of range
    if(index > 0 && index > this.size){
        return;
    }

    // if first index 
    if(index === 0){
        this.head = new Node(data, this.head)
        return
    }

    const node = new Node(data)
    let current, previous

    // set current to first 
    current = this.head
    let count = 0 

    while(count < index){
        previous = current // node before index
        count++
        current = current.next // node after index
    }

    node.next = current 
    previous.next = node 

    this.size++
}

insertAt(500, 19)

// get at index 

getAt(index){
    let current = this.head 
    let count = 0 

    while(current){
        if(count == index){
            console.log(current.data)
        }
        count++
        current = current.next
    }
    return null
}
// remove at index 


removeAt(index){
    if(index > 0 && index > this.size){
        return 
    }

    let current = this.head 
    let previous 
    let count = 0 

    // remove first 

    if(index === 0){
        this.head = current.next
    } else {
        while(count < index){
            count++
            previous = current 
            current = current.next
        }
        previous.next = current.next
    }

    this.size--
}

// clear list

clearList(){
    this.head = null;
    this.size = 0
}

