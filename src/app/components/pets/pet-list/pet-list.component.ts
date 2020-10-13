import {Component, OnInit} from '@angular/core';
import {Pet} from '../../../shared/models/pet';
import {PetService} from '../../../shared/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
    this.pets = this.petService.getPets();

  }


  delete(id: number): void {
    this.petService.deletePet(id);
    this.pets = this.petService.getPets();

  }
}
