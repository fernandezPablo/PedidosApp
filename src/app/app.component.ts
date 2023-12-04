import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { DatabaseService } from './services/database.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}
  ngOnInit(): void {
    this.databaseService.connect();
  }
}
