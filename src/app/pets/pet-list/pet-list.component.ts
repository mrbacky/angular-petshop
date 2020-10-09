import {Component, OnInit} from '@angular/core';
import {Pet} from '../../shared/models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {


  constructor() {
  }

  pets: Pet[];

  countOneUp(): void {
    this.pets.push();
  }

  ngOnInit(): void {
    this.pets = [
      {id: 1, name: 'Molly'},
      {id: 2, name: 'Mikey'}];
  }

}
