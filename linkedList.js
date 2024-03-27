// Creating an Linked List Data Structure from scratch
// whats needed two classes...
// Node class, with a value and Node = next
// LinkedList class with two Node = first and Node = last
// Add these methods... addFirst, addLast, deleteFirst, deleteLast, contains, indexOf

class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // adding a node to the beginning of the linked list making it the head
    addFirst(item) {
       let node = new MyNode(item);
        if (!this.head) {
            // establishing the first node as the head
            this.head = node;
        } else {
            // variable storing the node which the head is pointing too.
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
    }
    addLast(item) {
        // adding a node to the end of the linked lis making it the tail
        let node = new MyNode();
        node.value = item;
        this.tail = node;
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

const list = new MyLinkedList();
list.addFirst(1);
list.addFirst(3);
list.addFirst(4);
list.addLast(8)

console.log(list)