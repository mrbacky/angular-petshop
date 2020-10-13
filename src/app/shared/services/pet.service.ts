import {Injectable} from '@angular/core';
import {Pet} from '../models/pet';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  pets: ({ id: number, name: string }[]);

  constructor() {
    this.pets = [
      {id: 1, name: 'Molly'},
      {id: 2, name: 'Mikey'}
    ];
  }

  getPets(): Pet[] {
    return this.pets;
  }

  addPet(pet: Pet): void {
    this.pets.push(pet);
  }

  updatePet(pet: Pet): void {
    const petToUpdate = this.getPetById(pet.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

  getPetById(id: number): { id: number; name: string } {
    return this.pets.find(p => p.id === id);

  }

  deletePet(id: number): void {
    this.pets = this.pets.filter(p => p.id !== id);
  }
}
