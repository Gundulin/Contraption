import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MysticValeCompanionComponent } from './mystic-vale-companion/mystic-vale-companion.component';

const routes: Routes = [
  { path: 'mystic-vale-companion', component: MysticValeCompanionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
