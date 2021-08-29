import { Routes, RouterModule } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserListComponent } from './user-list/user-list.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/user_list', pathMatch: 'full' },
    { path: 'user_list', component: UserListComponent },
    { path: 'add_edit_user', component: AddEditUserComponent },
    { path: '**', component: UserListComponent }
]
export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });