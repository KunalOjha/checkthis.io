import { Injectable } from '@angular/core';
import { Task } from 'models.ts/task';
import { TasksService } from '../../shared/tasks.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { REQUEST_USER_TASKS, RequestUserTasksSuccess } from '../actions/tasks.actions';
import { map, switchMap} from 'rxjs/operators';

@Injectable()
export class TasksEffects {

@Effect()
updateTaskList$ = this.actions$.pipe(
    ofType(REQUEST_USER_TASKS),
    switchMap(() => {
       return this.tasksService.fetchTasklist('to-do')
    }),
    map((tasks: Task[]) => new RequestUserTasksSuccess(tasks))
)

constructor(private actions$: Actions, private tasksService: TasksService) {}
  
}
