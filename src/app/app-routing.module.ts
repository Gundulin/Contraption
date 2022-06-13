import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterpieceComponent } from './masterpiece/masterpiece.component';
import { MysticValeCompanionComponent } from './mystic-vale-companion/mystic-vale-companion.component';

const routes: Routes = [
  { path: 'mystic-vale-companion', component: MysticValeCompanionComponent },
  { path: 'masterpiece', component: MasterpieceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
