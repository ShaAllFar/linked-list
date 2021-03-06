'use strict';

module.exports = SinglyLinkedList;

function Node(val){
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(arr){
  this.head = null;

  if(Array.isArray(arr)){
    arr.forEach(val => {
      this.prepend(val);
    });
  }
}

SinglyLinkedList.prototype.prepend = function(val){
  let node  = new Node(val);

  if(!this.head){
    this.head = node;
    return node.val
  }

  node.next = this.head;
  this.head = node;
  return node.val;
}

SinglyLinkedList.prototype.append = function(val){
  let node = new Node(val);
  let lastNode = null;

  if(!this.head){
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return node.val;

  function _setLastNode(node){
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
}


// var sll = new SinglyLinkedList([5,4,3]);
// sll.prepend(2);
// sll.prepend(1);
// sll.append(6);
// sll.append(7);
// console.log(sll);
