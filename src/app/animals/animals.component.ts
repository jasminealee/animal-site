import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {
  // animals: Animal[];
  animals: FirebaseListObservable<any[]>;
  constructor(private router: Router, private animalService: AnimalService){}


  ngOnInit(){
    this.animals = this.animalService.getAnimals();
  }

  goToDetailPage(clickedAnimal: Animal) {
   this.router.navigate(['animals', clickedAnimal.$key]);
 };

}
