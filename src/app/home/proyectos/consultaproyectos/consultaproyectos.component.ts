import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultaproyectos',
  templateUrl: './consultaproyectos.component.html',
  styleUrls: ['./consultaproyectos.component.scss'],
})
export class ConsultaproyectosComponent {

  consultap = new FormGroup({
    nombreproyecto: new FormControl('', [Validators.pattern('^[a-zA-Z 123456789]+$'), Validators.required]),
    fecha_inicio: new FormControl('', Validators.required),
    idlider: new FormControl('', [Validators.pattern('^[a-zA-Z 123456789]+$'), Validators.required]),
  })

  proyecto: any = null;

  constructor(private ruta:Router,private http: HttpClient, public alertController: AlertController) {}
  
  isFormValid(): boolean {
    // Using non-null assertion operator to ensure `get` does not return undefined
    return this.consultap.valid &&
           (this.consultap.get('nombreproyecto')!.touched || this.consultap.get('nombreproyecto')!.dirty) &&
           (this.consultap.get('fecha_inicio')!.touched || this.consultap.get('fecha_inicio')!.dirty) &&
           (this.consultap.get('idlider')!.touched || this.consultap.get('idlider')!.dirty);
  }

  async consultab() {
    const f = this.consultap.value;

    this.http.get(`http://localhost:3000/api/proyectos`, {
      params: {
        nombreproyecto: f.nombreproyecto!,
        fecha_inicio: f.fecha_inicio!,
        idlider: f.idlider!
      }
    }).subscribe(async (data: any) => {
      this.proyecto = data; // Asigna todos los datos del proyecto a la variable proyecto
      console.log(this.proyecto);
      await this.presentAlert('Proyecto encontrado', 'Los datos del proyecto se han cargado correctamente.');
    }, async (error) => {
      if (error.status === 404) {
        await this.presentAlert('Error', 'Proyecto no existe.');
      } else {
        await this.presentAlert('Error', 'Ocurrió un error al realizar la consulta.');
      }
      console.error(error);
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  getProyectoKeys(): string[] {
    if (this.proyecto) {
      return Object.keys(this.proyecto);
    }
    return [];
  }

  cproy() { 
    this.ruta.navigate(['home/cproy']); 
        }

  main() {
    this.ruta.navigate(['home/main']);
  }

  proy() { 
    this.ruta.navigate(['home/proy']); 
        }
}
