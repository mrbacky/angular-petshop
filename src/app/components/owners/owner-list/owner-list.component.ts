import {Component, OnInit} from '@angular/core';
import {Owner} from '../../../shared/models/owner';
import {OwnerService} from '../../../shared/services/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.owners = this.ownerService.getOwners();

  }

  delete(id: number): void {
    this.ownerService.deleteOwner(id);
    this.owners = this.ownerService.getOwners();
  }
}
