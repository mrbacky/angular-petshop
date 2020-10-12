import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetListComponent} from './components/pets/pet-list/pet-list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'pets', component: PetListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],

})

export class AppRoutingModule {
}
