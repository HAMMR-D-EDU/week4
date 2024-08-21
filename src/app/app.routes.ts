import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; //importing login component
import { AccountComponent} from './account/account.component'; //importing account component

export const routes: Routes = [
{path: 'login', component:LoginComponent},
{path: 'account', component:AccountComponent}
];
