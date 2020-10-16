import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetListComponent} from './components/pets/pet-list/pet-list.component';
import {RouterModule, Routes} from '@angular/router';
import {PetDetailsComponent} from './components/pets/pet-details/pet-details.component';
import {PetAddComponent} from './components/pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './components/pets/pet-update/pet-update.component';
import {OwnerListComponent} from './components/owners/owner-list/owner-list.component';
import {OwnerDetailsComponent} from './components/owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './components/owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './components/owners/owner-update/owner-update.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},

  {path: 'pets', component: PetListComponent},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: 'pet-add', component: PetAddComponent},
  {path: 'pet-update/:id', component: PetUpdateComponent},

  {path: 'owners', component: OwnerListComponent},
  {path: 'owners/:id', component: OwnerDetailsComponent},
  {path: 'owner-add', component: OwnerAddComponent},
  {path: 'owner-update/:id', component: OwnerUpdateComponent},


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
