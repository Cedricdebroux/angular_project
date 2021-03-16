import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TodoService {
  today = new Date();

  todos: any;
  todoSubject = new Subject<any[]>();


  constructor(){

    setTimeout(() => {
      this.todos = [
        {
          todoName: "Projet 1",
          todoStatus: true,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elitconsequuntur quod totam, laboriosam illo ad incidunt saepe veritatis consequatur ea expedita, culpa eum tempore, temporibus excepturi earum? Fugiat culpa praesentium mollitia modi eligendi, obcaecati asperiores dolores molestiae nam, ducimus repellat.",
        },
        {
          todoName: "Projet 2",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elitconsequuntur quod totam, laboriosam illo ad incidunt saepe veritatis consequatur ea expedita, culpa eum tempore, temporibus excepturi earum? Fugiat culpa praesentium mollitia modi eligendi, obcaecati asperiores dolores molestiae nam, ducimus repellat.",
        },
        {
          todoName: "Projet 3",
          todoStatus: true,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elitconsequuntur quod totam, laboriosam illo ad incidunt saepe veritatis consequatur ea expedita, culpa eum tempore, temporibus excepturi earum? Fugiat culpa praesentium mollitia modi eligendi, obcaecati asperiores dolores molestiae nam, ducimus repellat.",
        },
        {
          todoName: "Projet 4",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elitconsequuntur quod totam, laboriosam illo ad incidunt saepe veritatis consequatur ea expedita, culpa eum tempore, temporibus excepturi earum? Fugiat culpa praesentium mollitia modi eligendi, obcaecati asperiores dolores molestiae nam, ducimus repellat.",
        },
      ];
      this.emitTodos();
    },1000);
  }
emitTodos() {
  this.todoSubject.next(this.todos);
}

  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
  }
  onChangeIsModif(i: number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
  }
  getTodo(index : number) {
    if(this.todos[index]){
      return this.todos[index];
    }
    return false;
  }
}
