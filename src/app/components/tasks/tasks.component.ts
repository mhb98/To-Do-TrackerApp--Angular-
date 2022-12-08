import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[]=[];
  constructor(private taskService: TaskService) { }
//Getting Data
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }
  deleteTask(task:Task){
    console.log(task)
    
     this.taskService.deleteTask(task).subscribe(
      ()=>(this.tasks = this.tasks.filter((t) => t.id !== task.id))
     );
    
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task); 
  

  }
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }

}
