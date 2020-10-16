import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PetListComponent} from './components/pets/pet-list/pet-list.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {PetDetailsComponent} from './components/pets/pet-details/pet-details.component';
import {PetAddComponent} from './components/pets/pet-add/pet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PetUpdateComponent} from './components/pets/pet-update/pet-update.component';
import {HttpClientModule} from '@angular/common/http';
import {OwnerListComponent} from './components/owners/owner-list/owner-list.component';
import {OwnerAddComponent} from './components/owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './components/owners/owner-update/owner-update.component';
import {OwnerDetailsComponent} from './components/owners/owner-details/owner-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetDetailsComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnerListComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    OwnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
