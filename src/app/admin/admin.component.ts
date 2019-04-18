import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AnimalService]
})
export class AdminComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  submitForm(species: string, notes: string) {
    var newAnimal: Animal = new Animal(species, notes);
    this.animalService.addAnimal(newAnimal);
    
    console.log(newAnimal);
  }

}
