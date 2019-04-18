import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AdminComponent } from './admin/admin.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Animals';

}
