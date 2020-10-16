import {Injectable} from '@angular/core';
import {Owner} from '../models/owner';
import {Pet} from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owners: Owner[];


  constructor() {
    this.owners = [
      {
        id: 1,
        firstName: 'Mike',
        lastName: 'Erm',
        address: 'Kirkevej 7',
        email: 'mike@gmail.com',
        phoneNumber: '+45848'
      },
      {
        id: 2,
        firstName: 'Frank',
        lastName: 'Boss',
        address: 'New York Street 4',
        email: 'frank@gmail.com',
        phoneNumber: '+4852552'
      }
    ];
  }

  addOwner(owner: Owner): void {
    this.owners.push(owner);
  }
  getOwners(): Owner[] {
    return this.owners;
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
