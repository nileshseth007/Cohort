/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.listOfTodo = [];
  }
  add(todo){
    this.listOfTodo.push(todo);
  }
  remove(todo){
    this.listOfTodo.splice(todo, 1);
  }
  update(index, updatedTodo){
    if(index < 0 || index >= this.listOfTodo.length) return ;
    this.listOfTodo[index] = updatedTodo;
  }
  getAll(){
    return this.listOfTodo;
  }
  get(indexOfTodo){
    let ans = this.listOfTodo[indexOfTodo];
    if(ans === undefined) ans = null;
    return ans;
  }
  clear() {
    this.listOfTodo = [];
  }

}

module.exports = Todo;
