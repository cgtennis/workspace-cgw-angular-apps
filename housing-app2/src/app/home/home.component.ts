import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {HousingLocation} from "../housing-location";
import {HousingService} from "../service/housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  templateUrl: './home.component.html' ,
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  constructor(private housingService: HousingService) {}

  ngOnInit() {

    console.log("here in ngOnInit");
    this.housingService.getLocations().subscribe(data => {
        this.housingLocationList = data;
        this.filteredLocationList = data;
      }
    )
  }

  filterResults(text: string) {
    if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter
    (x => x?.city.toLowerCase().includes(text.toLowerCase()));

  }
}
