import { Task } from "models.ts/task";
import { TaskListActions, REQUEST_USER_TASKS, REQUEST_USER_TASKS_SUCCESS } from '../actions/tasks.actions';

export interface State  {
    todo: Task[]
}

const INITIAL_TASK_LIST_STATE: State = {
    todo: []
}

export function taskListReducer(state = INITIAL_TASK_LIST_STATE, action) {
    switch(action.type) {
        case REQUEST_USER_TASKS_SUCCESS:
            return {
                ...state,
                todo: action.payload
            } 
    }
    return state
}