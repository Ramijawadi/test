import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {
  @Input() placeholder1 : string = "Start" ; 
  @Input() placeholder2 : string = "End" ; 
  @Input() placeholder3 : string = "00" ; 


  

}
