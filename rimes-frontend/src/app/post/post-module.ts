import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes : Routes = [
  { path:'posts', component:PostListComponent },
  { path:'post-add', component:PostFormComponent },
  { path:'post-update/:id', component:PostFormComponent },
  { path:'post-detail/:id', component:PostDetailComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PostFormComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
