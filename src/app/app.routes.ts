import { Routes } from '@angular/router';
import { RosterComponent } from './admin/roster/roster.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './user/personal-info/personal-info.component';
import { TasksComponent } from './user/tasks/tasks.component';

export const routes: Routes = [
    {path: 'roster', component: RosterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'personal-info', component: PersonalInfoComponent},
    {path: 'tasks', component: TasksComponent}
];
