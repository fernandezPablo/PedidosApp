import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GUIService } from '../services/gui.service';
import { Router } from '@angular/router';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';
import { Cliente } from '../core/interfaces';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';

register();

const PAGE_SIZE = 7;

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  
  @ViewChild('swiper') swipperElement: ElementRef | undefined;
  swiper?: Swiper;
  cantClientes: number = PAGE_SIZE;
  clienteBusqueda: string = '';
  clienteSeleccionado: Cliente | undefined = undefined;
  _clientes: Cliente[] = [
    {
      nombre: "Ana García",
      direccion: "Calle 123, Ciudad Ficticia",
      saldo: 1500.50
    },
    {
      nombre: "Carlos Rodríguez",
      direccion: "Avenida XYZ, Pueblo Imaginario",
      saldo: 2200.75
    },
    {
      nombre: "María López",
      direccion: "Carrera 456, Villa de los Sueños",
      saldo: 1800.20
    },
    {
      nombre: "Juan Martínez",
      direccion: "Camino ABC, Ciudad de la Fantasía",
      saldo: 3000.00
    },
    {
      nombre: "Laura Pérez",
      direccion: "Plaza 789, Pueblo de las Maravillas",
      saldo: 2500.30
    },
    {
      nombre: "Miguel Sánchez",
      direccion: "Pasaje Mágico, Ciudad de las Ilusiones",
      saldo: 1900.60
    },
    {
      nombre: "Isabel Vargas",
      direccion: "Rincón Encantado, Pueblo Encantador",
      saldo: 2800.45
    },
    {
      nombre: "Roberto Ramírez",
      direccion: "Vereda de los Sueños, Villa Soñadora",
      saldo: 2100.90
    },
    {
      nombre: "Sofía Torres",
      direccion: "Sendero de las Mariposas, Ciudad Imaginada",
      saldo: 3200.15
    },
    {
      nombre: "Javier Mendoza",
      direccion: "Callejón de las Estrellas, Pueblo Estelar",
      saldo: 2700.25
    },
    {
      nombre: "Elena Guzmán",
      direccion: "Calle Principal, Villa Alegre",
      saldo: 2300.70
    },
    {
      nombre: "Adrián Duarte",
      direccion: "Avenida Colorida, Ciudad Vibrante",
      saldo: 2000.80
    },
    {
      nombre: "Patricia Navarro",
      direccion: "Paseo Feliz, Pueblo Feliz",
      saldo: 2900.35
    },
    {
      nombre: "Héctor Ríos",
      direccion: "Ruta Encantada, Ciudad Encantadora",
      saldo: 2600.40
    },
    {
      nombre: "Carmen Silva",
      direccion: "Callejuela Encantadora, Villa Encantada",
      saldo: 3400.55
    },
    {
      nombre: "Ricardo Fuentes",
      direccion: "Avenida del Arcoíris, Pueblo Arcoíris",
      saldo: 3100.10
    },
    {
      nombre: "Gabriela Jiménez",
      direccion: "Calle de las Flores, Ciudad Floral",
      saldo: 2400.95
    },
    {
      nombre: "Fernando Mora",
      direccion: "Avenida Soleada, Villa Soleada",
      saldo: 3700.75
    },
    {
      nombre: "Natalia Herrera",
      direccion: "Rincón del Bosque, Ciudad Boscosa",
      saldo: 2800.20
    },
    {
      nombre: "Diego Cordero",
      direccion: "Calle del Silencio, Pueblo Silencioso",
      saldo: 2600.30
    }
  ];
  
  public get clientes() : Cliente[] {
    return this._clientes.filter( (cliente, index) => cliente.nombre?.includes(this.clienteBusqueda) );
  }
  
  constructor( 
    private guiService: GUIService,
    private router: Router) {
      // this.swiper = new Swiper('.swiper', {
        //   noSwiping: false,
        //   noSwipingClass: 'swiper-no-swiping',
        //   allowSlideNext: false,
        //   allowSlidePrev: false
        // });
      }
      
      ngOnInit() {
        this.guiService.ShowTabBar.set(false); 
      }
    
      cargarClientes($event: IonInfiniteScrollCustomEvent<void>) {
        // this.cantClientes += PAGE_SIZE;
        $event.target.complete();
      }

      aceptar() {
        console.log(this.swipperElement?.nativeElement.swiper);
        try{
          if(this.swipperElement)
            this.swipperElement.nativeElement.swiper.allowSlideNext = true;
          this.swipperElement?.nativeElement.swiper.slideNext();
        }
        finally{
          if(this.swipperElement)
            this.swipperElement.nativeElement.swiper.allowSlideNext = false;
        }
      }
      
       cancelar() {
        if(this.swipperElement?.nativeElement.swiper.isBeginning){
          this.router.navigateByUrl('/tabs/pedidos-tab');
          return;
        }
        try{
          if(this.swipperElement)
            this.swipperElement.nativeElement.swiper.allowSlidePrev = true;
          this.swipperElement?.nativeElement.swiper.slidePrev();
        }
        finally{
          if(this.swipperElement)
            this.swipperElement.nativeElement.swiper.allowSlidePrev = false;
        }
      }

      seleccionarCliente(cliente: Cliente) {
        this.clienteSeleccionado = cliente;
      }

      limpiarCliente() {
        this.clienteSeleccionado = undefined;
      }

}
