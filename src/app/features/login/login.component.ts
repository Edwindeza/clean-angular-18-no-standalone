import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../core/services/localstorage/localstorage.service';
import { IPokemon } from '../../core/interface/Pokemon.interface';
import { HttpService } from '../../core/services/http/http.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  // pokemon: IPokemon;

  constructor(
    private _localStorageService : LocalstorageService,
    private _httpService : HttpService,
  ) {
  }
  ngOnInit(): void { // se relaciona el HTML con el component
    this._localStorageService.setItem('hola', 'mundo');
    this.getPokemon();
  }

  getPokemon() {
    this._httpService.get('https://pokeapi.co/api/v2/pokemon/1').pipe(take(1)).subscribe(
      pokemon => console.log(pokemon)
    );
  }

}
