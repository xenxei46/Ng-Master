import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LifecycleService {

  constructor() { }

  message:string = "this is onInit";
  
}
