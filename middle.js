// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

class Node{
    constructor(value, ref = null){
      this.value = value;
      this.ref = ref;
    }
}
class LinkedList {
    constructor() {
      this.head = null;
    }
    add(value) {
      const node = new Node(value);
      if(this.head === null) {
        this.head = node;
        return node;
      }
      let currentNode = this.head;
      while(currentNode.ref) {
        currentNode = currentNode.ref;
      }
      currentNode.ref = node;
      return node;
    }
    addAt(position, value) {
      const node = new Node(value);
      let currentNode = this.head;
      for(let i = 1; i < position; i++) {
        currentNode = currentNode.ref;
      }
      node.ref = currentNode.ref
      currentNode.ref = node;
      return node;
    }
    valueAt(position) {
      let currentNode = this.head;
      for(let i = 1; i < position; i++) {
        currentNode = currentNode.ref;
      }
      return currentNode.value;
    }
    removeAt(position) {
      let currentNode = this.head;
      if(position === 0) {
        this.head = currentNode.ref;
      }
      for(let i = 0; i < position; i++) {
        let previousNode = currentNode;
        currentNode = currentNode.ref;
        previousNode.ref = currentNode.ref;
      }
      return currentNode.value;
    }
}
  
  const list = new LinkedList();
  console.log(list.add('1'));
  console.log(list.add('2'));
  console.log(list.add('3'));
  console.log(list.add('4'));
  console.log(list.add('5'));
  list.add(6);

  function count (lista) {
      let cont = 0; 
      let aux = lista;

      while ( lista.ref !== null ) {
        cont ++
        lista = lista.ref 
        }    
    for ( let i = 0 ; i < Math.ceil(cont / 2 ); i++) {
        aux = aux.ref;
    }
    return aux;
  }
console.log(count (list.head));
  