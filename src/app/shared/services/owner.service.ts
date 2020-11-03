import {Injectable} from '@angular/core';
import {Owner} from '../models/owner';
import {Pet} from '../models/pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilteredList} from '../models/filteredList';
import {environment} from '../../../environments/environment.prod';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  owners: Owner[];

  constructor(private http: HttpClient,
              private authService: AuthenticationService) {
  }

  addOwner(owner: Owner): void {
    this.owners.push(owner);
  }

  getOwners(): Observable<FilteredList<Owner>> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<FilteredList<Owner>>(environment.apiUrl + '/owners', httpOptions);

  }

  getOwnerById(id: number): Owner {
    return this.owners.find(o => o.id === id);
  }

  updateOwner(owner: Owner): void {
    const ownerToUpdate = this.getOwnerById(owner.id);
    const index = this.owners.indexOf(ownerToUpdate);
    this.owners[index] = owner;
  }

  deleteOwner(id: number): void {
    this.owners = this.owners.filter(o => o.id !== id);
  }
}
