import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GUIService } from '../services/gui.service';
import { Router } from '@angular/router';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';
import { Articulo, Cliente, PreventaArticulo } from '../core/interfaces';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';
import { HttpServiceService } from '../services/http-service.service';

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
      zona: "9 de Julio"
    },
    {
      nombre: "Carlos Rodríguez",
      direccion: "Avenida XYZ, Pueblo Imaginario",
      zona: "9 de Julio"
    },
    {
      nombre: "María López",
      direccion: "Carrera 456, Villa de los Sueños",
      zona: "Alderetes"
    },
    {
      nombre: "Juan Martínez",
      direccion: "Camino ABC, Ciudad de la Fantasía",
      zona: "Bella Vista"
    },
    {
      nombre: "Laura Pérez",
      direccion: "Plaza 789, Pueblo de las Maravillas",
      zona: "Concepción"
    },
    {
      nombre: "Miguel Sánchez",
      direccion: "Pasaje Mágico, Ciudad de las Ilusiones",
      zona: "Tafi Viejo"
    },
    {
      nombre: "Isabel Vargas",
      direccion: "Rincón Encantado, Pueblo Encantador",
      zona: "Lomas de Tafí"
    },
    {
      nombre: "Roberto Ramírez",
      direccion: "Vereda de los Sueños, Villa Soñadora",
      zona: "Barrio Oeste"
    },
    {
      nombre: "Sofía Torres",
      direccion: "Sendero de las Mariposas, Ciudad Imaginada",
      zona: "La Bombilla"
    },
    {
      nombre: "Javier Mendoza",
      direccion: "Callejón de las Estrellas, Pueblo Estelar",
      zona: "Ciudadela"
    },
    {
      nombre: "Elena Guzmán",
      direccion: "Calle Principal, Villa Alegre",
      zona: "Barrio Norte"
    },
    {
      nombre: "Adrián Duarte",
      direccion: "Avenida Colorida, Ciudad Vibrante",
      zona: "Centro"
    },
    {
      nombre: "Patricia Navarro",
      direccion: "Paseo Feliz, Pueblo Feliz",
      zona: "Sur"
    },
    {
      nombre: "Héctor Ríos",
      direccion: "Ruta Encantada, Ciudad Encantadora",
      zona: "Este"
    },
    {
      nombre: "Carmen Silva",
      direccion: "Callejuela Encantadora, Villa Encantada",
      zona: "Lastenia"
    },
    {
      nombre: "Ricardo Fuentes",
      direccion: "Avenida del Arcoíris, Pueblo Arcoíris",
      zona: "Banda del Río Salí"
    },
    {
      nombre: "Gabriela Jiménez",
      direccion: "Calle de las Flores, Ciudad Floral",
      zona: "Abasto"
    },
    {
      nombre: "Fernando Mora",
      direccion: "Avenida Soleada, Villa Soleada",
      zona: "Parque 9 de Julio"
    },
    {
      nombre: "Natalia Herrera",
      direccion: "Rincón del Bosque, Ciudad Boscosa",
      zona: "Yerba Buena"
    },
    {
      nombre: "Diego Cordero",
      direccion: "Calle del Silencio, Pueblo Silencioso",
      zona: "Tafí del Valle"
    }
  ];
  public get clientes() : Cliente[] {
    return this._clientes.filter( (cliente, index) => cliente.nombre?.includes(this.clienteBusqueda) );
  }

  articuloBusqueda: string = '';
  _preventasArticulos: PreventaArticulo[] = [
      {
        articulo: { 
          codigoarticu: 1234,
          articu: 'Coca Cola x 3L',
          preciovental1: 1000,
          present: 10
        },
        cantid: 100,
        fardos: 2,
        subtotal: 1000
      },
      {
        articulo: { 
          codigoarticu: 2124,
          articu: 'Fernet Branca x 1L',
          preciovental1: 3000,
          present: 20
         },
        cantid: 3,
        fardos: 4,
        subtotal: 3000
      },
      {
        articulo: { 
          codigoarticu: 2124,
          articu: 'Bolsa de Hielo x 5KG',
          preciovental1: 700,
          present: 20
         },
        cantid: 3000,
        fardos: 4,
        subtotal: 200
      },
      {
        articulo: { 
          codigoarticu: 2124,
          articu: 'Gaseosa Secco x 2L',
          preciovental1: 300,
          present: 6
         },
        cantid: 3,
        fardos: 4,
        subtotal: 3000
      },
      {
        articulo: { 
          codigoarticu: 2124,
          articu: 'Vino toro x 1L',
          preciovental1: 1200,
          present: 10
         },
        cantid: 3000,
        fardos: 4,
        subtotal: 200
      },
  ];
  public get preventasArticulos() : PreventaArticulo[] {
    return this._preventasArticulos.filter( (preventaArticulo, index) => preventaArticulo.articulo?.articu?.toUpperCase().includes(this.articuloBusqueda.toUpperCase()) ||  this.articuloBusqueda === '');
  }
  
  
  constructor( 
    private guiService: GUIService,
    private router: Router,
    private httpService: HttpServiceService) {
      // this.swiper = new Swiper('.swiper', {
        //   noSwiping: false,
        //   noSwipingClass: 'swiper-no-swiping',
        //   allowSlideNext: false,
        //   allowSlidePrev: false
        // });
      }
      
      async ngOnInit() {
        this.guiService.ShowTabBar.set(false); 

        try {
          const resp = await this.httpService.getActors();
          console.log('Actores: ', resp);
        } catch (error: any) {
          console.error('Error al consultar actores: ', error.message);
          console.error('Error al consultar actores (Object error): ', error);
        }
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
