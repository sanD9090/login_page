import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardStatusService {

  constructor() { }

  guardStatus: boolean = false;

}
