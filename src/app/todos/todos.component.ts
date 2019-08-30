import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UUID } from "angular2-uuid";
import { TodoStore } from "./store";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  store = TodoStore;
  todoSchema: {
    _id: String,
    todo: String
  }
  OnSubmit(submitTodos: NgForm) {
    const form = submitTodos.value;
    const data = {
      _id: UUID.UUID(),
      todo: form.todo
    };
    this.store.push(data);
  }
  OnDelete(id) {
    const some= this.store.filter(item=>item._id !== id);
    this.store = some;
  }
}
