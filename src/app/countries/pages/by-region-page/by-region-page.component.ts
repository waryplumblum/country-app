import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[] = [];

  constructor( private countriesService:CountriesService ) {}

  searchByRegion( region:string ):void{
    // this.countriesService.searchCapital( term );
    // console.log({ term });
    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries =  countries;
      });
  }

}
