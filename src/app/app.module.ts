import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetListComponent } from './components/pets/pet-list/pet-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { PetDetailsComponent } from './components/pets/pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
