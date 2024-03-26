// Creating an Linked List Data Structure from scratch
// whats needed two classes...
// Node class, with a value and Node = next
// LinkedList class with two Node = first and Node = last
// Add these methods... addFirst, addLast, deleteFirst, deleteLast, contains, indexOf

class MyLinkedList {
    constructor() {
        this.Node = head;
        this.Node = tail;
    }
    addFirst(value) {
        // adding a node to the beginning of the linked list making it the head
       let node = new MyNode()
       node.value = value;
       this.Node.head = node
       node.Node = this.Node.tail

    }
    addLast() {
        // adding a node to the end of the linked lis making it the tail
    }
    deleteFirst() {
        // deleting the first item of the linked list
    }
    deleteLast() {
        // deleting the last item of the linked list
    }
    contains() {
        // checks to see what data it contains
    }
    indexOf() {
        // checks the index of the item
    }
}

class MyNode {
    constructor() {
        this.value = value;
        this.Node = next;
    }
}

const list = new MyLinkedList();
list.addFirst(1);
console.log(list)