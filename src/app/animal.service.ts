import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.animals = database.list('animals');
}

  getAnimals() {
    return this.animals;
  }

  addAnimal(newAnimal: Animal) {
  this.animals.push(newAnimal);
  }

  getAnimalById(animalId: number){
   // for (var i = 0; i <= ANIMALS.length - 1; i++) {
   //   if (ANIMALS[i].id === animalId) {
   //     return ANIMALS[i];
   //   }
   }

  // ngOnInit() {
  //   this.route.params.forEach((urlParameters) => {
  //    this.animalId = parseInt(urlParameters['id']);
  //  });
  //  this.animalToDisplay = this.animalService.getAnimalById(this.animalId);
  // }
}
