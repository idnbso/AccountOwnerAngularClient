import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NotFoundComponent } from './core/error-pages/not-found/not-found.component';
import { InternalServerComponent } from './core/error-pages/internal-server/internal-server.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule" },
    
    { path: 'login', component: LoginComponent },
    { path: 'customers', component: CustomersComponent, canActivate: [AuthGuardService] },

    { path: '404', component: NotFoundComponent },
    { path: '500', component: InternalServerComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
]

export default routes;