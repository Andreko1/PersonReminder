import { Component } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private list : ListService ) { 
    
  }

}
