import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getActors(){
    return new Promise<any>( (resolve, reject) => {
      this.http.get(`http://192.168.1.10:8080/api/actores`).subscribe({
        next: resp => resolve(resp),
        error: error => {
          console.error('Error dentro del servicio: ', error.message);
          reject(error)
        }
      });
    });
  }

}
