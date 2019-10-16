import { Injectable } from '@angular/core';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getStore() {
    return JSON.parse(localStorage.getItem('store'));
  }

  setStore(data: Data[]) {
    localStorage.setItem('store', JSON.stringify(data));
  }

  clearStore() {
    localStorage.removeItem('store');
  }
}
