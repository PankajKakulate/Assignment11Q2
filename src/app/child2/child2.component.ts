import { Component } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers:[StringService]
})
export class Child2Component {
  public result:number=0;
  constructor(obj:StringService){
    this.result=obj.CountCapital("Marvellou Infosystems");
  }
}
