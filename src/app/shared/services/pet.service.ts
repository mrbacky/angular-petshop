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
}
