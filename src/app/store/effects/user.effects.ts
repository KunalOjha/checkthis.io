import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, take, tap, map, catchError } from "rxjs/operators";
import { CREATE_USER, LOGIN_USER, createUser, createUserSuccess, createUserError } from '../actions/user.actions'
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class UserEffects {
    
    @Effect()
    authNewUser$ = this.actions$.pipe(
        ofType(CREATE_USER),
        switchMap((action: createUser) => {
            const userData = action.payload;
            return this.authService.signupUser(userData).pipe(
                map(userData => new createUserSuccess({
                    'firstName': action.payload.firstname,
                    'lastName' : action.payload.lastname
                    }),
                ),
            );
        })
    )
    
    constructor(private actions$: Actions, private authService: AuthService) {}
}
