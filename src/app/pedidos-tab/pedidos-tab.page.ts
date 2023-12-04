import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Router } from '@angular/router';
import { GUIService } from '../services/gui.service';

interface Preventa{
  fecha?: Date;
  cliente?: String;
  total?: number;
}

@Component({
  selector: 'app-pedidos-tab',
  templateUrl: './pedidos-tab.page.html',
  styleUrls: ['./pedidos-tab.page.scss'],
})
export class PedidosTabPage implements OnInit, OnChanges {

  preventas: Preventa[] = [
    {
      fecha: new Date(),
      cliente: "Bill Gates",
      total: 500.00
    },
    {
      fecha: new Date(),
      cliente: "Steve Jobs",
      total: 300.00
    },
    {
      fecha: new Date(),
      cliente: "Mark Zuckerberg",
      total: 400.00
    },
    {
      fecha: new Date(),
      cliente: "Ada Lovelace",
      total: 250.00
    },
    {
      fecha: new Date(),
      cliente: "Alan Turing",
      total: 350.00
    },
    {
      fecha: new Date(),
      cliente: "Grace Hopper",
      total: 200.00
    },
    {
      fecha: new Date(),
      cliente: "Tim Berners-Lee",
      total: 450.00
    },
    {
      fecha: new Date(),
      cliente: "Linus Torvalds",
      total: 150.00
    },
    {
      fecha: new Date(),
      cliente: "Elon Musk",
      total: 600.00
    },
    {
      fecha: new Date(),
      cliente: "Satoshi Nakamoto",
      total: 500.00
    },
    {
      fecha: new Date(),
      cliente: "Jeff Bezos",
      total: 700.00
    },
    {
      fecha: new Date(),
      cliente: "Larry Page",
      total: 400.00
    },
    {
      fecha: new Date(),
      cliente: "Sergey Brin",
      total: 400.00
    },
    {
      fecha: new Date(),
      cliente: "Sheryl Sandberg",
      total: 300.00
    },
    {
      fecha: new Date(),
      cliente: "Marissa Mayer",
      total: 350.00
    },
    {
      fecha: new Date(),
      cliente: "Jack Dorsey",
      total: 250.00
    },
    {
      fecha: new Date(),
      cliente: "Brian Chesky",
      total: 450.00
    },
    {
      fecha: new Date(),
      cliente: "Reed Hastings",
      total: 300.00
    },
    {
      fecha: new Date(),
      cliente: "Sundar Pichai",
      total: 550.00
    },
    {
      fecha: new Date(),
      cliente: "Susan Wojcicki",
      total: 500.00
    }
  ];

  constructor(
    private router: Router,
    public guiService: GUIService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges...');
    
    this.guiService.ShowTabBar.set(true);
  }

  ngOnInit() {
  }

  NuevoPedido(){
    this.router.navigateByUrl('/tabs/pedidos-tab/pedido');
  }

}
