import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './../comment/comment.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

/*
Here we configure routing and router outlet.
Each path is mapped to corresponding component it needs to navigate to.
*/
const routes: Routes = [
    { path: '', redirectTo: '/commentSection', pathMatch: 'full' },
    { path: 'commentSection', component: CommentComponent },
    { path: '**', component: PageNotFoundComponent }
];

// A const that holds all our routing configuration. This is globally imported in @NgModule.
export const commentRouting = RouterModule.forRoot(routes);
