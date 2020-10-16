import {Injectable} from '@angular/core';
import {Pet} from '../models/pet';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PetService {


  pets: Pet[];

  constructor() { // private http: HttpClient
    this.pets = [
      {id: 1, name: 'Molly'},
      {id: 2, name: 'Mikey'}
    ];
  }

  getPets(): Pet[] {
    return this.pets;
    // return this.http.get<Pet[]>('https://petshop-rest-api-rado.azurewebsites.net/api/pets');
  }

  addPet(pet: Pet): void {
    this.pets.push(pet);
  }

  updatePet(pet: Pet): void {
    const petToUpdate = this.getPetById(pet.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

  getPetById(id: number): Pet {
    return this.pets.find(p => p.id === id);

  }

  deletePet(id: number): void {
    this.pets = this.pets.filter(p => p.id !== id);
  }
}
