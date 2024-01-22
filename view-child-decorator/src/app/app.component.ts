import {Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DemoComponent} from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ViewChild';

  //Below two 'dobInput' and 'ageInput' are reference templates specified with '#' inside input
  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  //Below using the name of component
  //a reference to the first instance of DemoComponent found in the view of the current component
  /*  The static property is set to true to query the view after the component's ngAfterViewInit lifecycle hook.
  If set to false (the default), it would query the view in the ngOnInit lifecycle hook.
   */
  @ViewChild(DemoComponent,{static: true}) demoComp!: DemoComponent;

  calculatAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear: number = new Date().getFullYear();
    let age = currentYear-birthYear;
    this.age.nativeElement.value = age;
    //console.log(this.dateOfBirth);
    //console.log(this.age);
  }

}
