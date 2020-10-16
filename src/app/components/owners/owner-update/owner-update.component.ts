import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../../shared/services/pet.service';
import {OwnerService} from '../../../shared/services/owner.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})

export class OwnerUpdateComponent implements OnInit {

  id: number;
  ownerForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(private route: ActivatedRoute,
              private ownerService: OwnerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    const owner = this.ownerService.getOwnerById(this.id);
    this.ownerForm.patchValue({
      id: owner.id,
      firstName: owner.firstName,
      lastName: owner.lastName,
      address: owner.address,
      email: owner.email,
      phoneNumber: owner.phoneNumber
    });

  }

  save(): void {
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner);
    this.ownerForm.reset();
    this.router.navigateByUrl('/owners');
  }
}
