import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GUIService {

  ShowTabBar: WritableSignal<boolean> = signal<boolean>(true);

  constructor() { }
}
