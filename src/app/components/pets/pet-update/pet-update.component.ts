import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})

export class PetUpdateComponent implements OnInit {

  id: number;
  petForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    const pet = this.petService.getPetById(this.id);
    this.petForm.patchValue({
      id: pet.id,
      name: pet.name
    });

  }

  save(): void {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet);
    this.petForm.reset();
    this.router.navigateByUrl('pets');
  }

}
