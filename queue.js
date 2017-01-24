'use strict';

const Queue = require('./singly-linked-list.js');

function Node(val){
  this.val = val;
  this.next = null;
}

Queue.prototype.dequeue = function(){
  let current = this.head;
  this.head = current.next;
  return current.val;
}

Queue.prototype.enqueue = function(val){
  let node = new Node(val);

  if(!this.head){
    this.head = node;
    this.tail = node;
    return;
  }

  this.tail.next = node;
  this.tail = node;

  return;
}
