class Node {
  constructor(data,next=null){
    this.data=data;
    this.next=next
  }
}

class Linkedlist {
  constructor(){
    this.head = null;
  }

  // Insert first node
  insertfirst(data){
    this.head = new Node(data,this.head)
  }

  // Insert last node
  insertLast(data){
    let node = new Node(data);
    let current = this.head;

    if(!this.head){
      this.head=node
    }else{
      while(current.next){
        current=current.next;
      }
      current.next=node;
    }
  }

  // Insert at Index
  insertAt(data,index){

    // index is out of range
    if(index > 0 && index > this.size()){
      return;
    }

    //index is 0 means @first
    if(index===0){
      this.insertfirst(data);
      return;
    }

    let current,prevoius;
    let newNode = new Node(data);
    current = this.head;
    let count = 0;
    while(count < index){
      prevoius = current;
      count++;
      current = current.next;
    }

    newNode.next = current;
    prevoius.next = newNode;

  }

  // Get the Index
  getAt(index){
    let current = this.head;
    let count=0;
    while(current){
      if(count===index){
        console.log('data -->', current.data)
        return;
      }
      count++;
      current=current.next;
    }
    return;
  }

  // Remove at Index
  removeAt(index){
     
    if(index > 0 && index > this.size()){
      return;
    }

    let current = this.head;

    if(index==0){
      this.head=current.next;
    }else{
      let previous;
      let count = 0;
      while(count !== index){
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

  }

  // Clear List
  clearList(){
    this.head = null;
  }

  // Print list data
  printData(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current=current.next;
    }
  }
  size(){
    let current = this.head;
    let size=0;
    while(current){
      size++;
      current=current.next;
    }
    return size;
  }
}


const ll = new Linkedlist();

ll.insertfirst(100);
ll.insertfirst(200);
ll.insertfirst(300);
ll.insertLast(5000);
ll.insertAt(250,1)

ll.removeAt(2)

ll.printData();