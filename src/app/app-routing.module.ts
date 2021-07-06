import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'new-user',
        component: NewUserComponent
    },
    {
        path: 'user/:id',
        component: WalletComponent
    },
    {
        path: 'user/search/:id',
        component: UsersComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
