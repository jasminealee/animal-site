import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';


@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [AnimalService]
})

export class AnimalDetailComponent implements OnInit {
  animalId;
  animalToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private animalService: AnimalService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.animalId = parseInt(urlParameters['id']);
   });
    this.animalService.getAnimalById(this.animalId).subscribe(dataLastEmittedFromObserver => {
      this.animalToDisplay = new Animal(dataLastEmittedFromObserver.species,
                                      dataLastEmittedFromObserver.notes)
                                      console.log(this.animalToDisplay);
    })
 }
  // submitForm(species: string, notes: string) {
  //   var newAnimal: Animal = new Animal(species, notes);
  //   this.animalService.addAnimal(newAnimal);
  // }
}
