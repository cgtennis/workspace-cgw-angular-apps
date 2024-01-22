import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{
    ngOnInit(): void {

    }

    getHelloMessage():string {
      return "hello from Demo component (child).";
    }


}
