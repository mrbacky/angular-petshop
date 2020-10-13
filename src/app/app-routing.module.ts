import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetListComponent} from './components/pets/pet-list/pet-list.component';
import {RouterModule, Routes} from '@angular/router';
import {PetDetailsComponent} from './components/pets/pet-details/pet-details.component';
import {PetAddComponent} from './components/pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './components/pets/pet-update/pet-update.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: 'pet-add', component: PetAddComponent},
  {path: 'pet-update/:id', component: PetUpdateComponent},

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
