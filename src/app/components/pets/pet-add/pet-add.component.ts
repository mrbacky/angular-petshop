import {Component, OnInit} from '@angular/core';
import {PetService} from '../../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('')
  });

  constructor(private petService: PetService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    const pet = this.petForm.value;
    this.petService.addPet(pet);
    this.petForm.reset();
    this.router.navigateByUrl('pets');
  }


}
