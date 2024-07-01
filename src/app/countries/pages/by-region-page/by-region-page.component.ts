import { CountriesService } from '../../services/countries.services';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService:CountriesService ) {}

  searchByRegion( region:Region ):void{
    this.selectedRegion = region;
    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries =  countries;
      });
  }

}
