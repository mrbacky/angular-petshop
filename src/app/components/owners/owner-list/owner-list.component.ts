import {Component, OnInit} from '@angular/core';
import {Owner} from '../../../shared/models/owner';
import {OwnerService} from '../../../shared/services/owner.service';
import {Observable} from 'rxjs';
import {Filter} from '../../../shared/models/filter';
import {FilteredList} from '../../../shared/models/filteredList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})

export class OwnerListComponent implements OnInit {

  filteredList$: Observable<FilteredList<Owner>>;

  constructor(private ownerService: OwnerService,
              private router: Router) {
  }

  //  sub in init --> async in html = auto sub
  //  can we return obs all the time?

  //  where to put FIltered list MODEL ?
  // ------- async, map, pipe, in html on action -> async

  ngOnInit(): void {
    this.filteredList$ = this.ownerService.getOwners();
  }

  delete(id: number): void {
    this.ownerService.deleteOwner(id);
    // this.owners = this.ownerService.getOwners();
  }
}
