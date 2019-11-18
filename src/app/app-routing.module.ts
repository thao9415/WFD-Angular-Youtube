import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaylistComponent} from './playlist/playlist.component';
import {PlayerComponent} from './player/player.component';


const routes: Routes = [
  {
    path: '', component: PlaylistComponent
  },
  {
    path: 'video/:abc', component: PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
