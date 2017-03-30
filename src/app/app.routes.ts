import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { ProfileEditComponent } from '../app/profile-edit/profile-edit.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path:'profile-edit', component:ProfileEditComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
