import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PetService} from '../../../shared/services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../../shared/services/owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });


  constructor(private ownerService: OwnerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    const owner = this.ownerForm.value;
    this.ownerService.addOwner(owner);
    this.ownerForm.reset();
    this.router.navigateByUrl('owners');
  }

}
