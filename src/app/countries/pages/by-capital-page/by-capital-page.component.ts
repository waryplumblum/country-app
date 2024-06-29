import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor( private countriesService:CountriesService ) {}

  searchByCapital( term:string):void{
    // this.countriesService.searchCapital( term );
    // console.log({ term });
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries =  countries;
      });
  }

}
