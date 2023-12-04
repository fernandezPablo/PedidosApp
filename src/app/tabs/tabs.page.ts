import { Component, OnInit } from '@angular/core';
import { GUIService } from '../services/gui.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor( public guiService: GUIService) {}
  ngOnInit(): void {
    console.log('Tabs page load...');
    
  }

}
