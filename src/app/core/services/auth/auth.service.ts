import { Injectable } from '@angular/core';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _localStageService: LocalstorageService,
  ) {}

  login () {
    this._localStageService.setItem('token','x')
  }

  logout () {
    this._localStageService.removeItem('token')
    // redirigir
  }

  getToken(): string {
    const token = this._localStageService.getItem('token');
    return token;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return typeof token !== 'object'
  }
}
