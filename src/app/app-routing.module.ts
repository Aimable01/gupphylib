import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './pages/gifs/gifs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: GifsComponent,
  },
  {
    path: 'trending',
    component: GifsComponent,
  },
  { path: 'random', component: GifsComponent },
  { path: 'search', component: GifsComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
