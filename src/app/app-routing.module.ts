import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LangListComponent } from './lang-list/lang-list.component';
import { LangDetailsComponent } from './lang-details/lang-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/lang', pathMatch: 'full' },
  { path: 'lang', component: LangListComponent },
  { path: 'lang/:id', component: LangDetailsComponent },
  { path: 'user', component: UserListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
