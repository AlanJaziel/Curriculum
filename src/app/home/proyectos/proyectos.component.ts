import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ProyectosService } from './proyectos.service'; // Importa el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent  implements OnInit {

  altaform = new FormGroup({
    nombreproyecto: new FormControl('', [Validators.pattern('^[a-zA-Z123456 ]+$'), Validators.required]),
    idempresa: new FormControl('', [Validators.pattern('^[a-zA-Z123456789 ]+$'), Validators.required]),
    fecha_inicio: new FormControl('', Validators.required),
    idlider: new FormControl('', [Validators.pattern('^[a-zA-Z123456789 ]+$'), Validators.required]),
    integrantesproyecto: new FormControl('', [Validators.pattern('^[a-zA-Z, ]+$'), Validators.required]),
    descripcion: new FormControl('', [Validators.pattern('^[a-zA-Z ]+$'), Validators.required]),
  })
  
  constructor(private ruta:Router,private proyectosService: ProyectosService,public alertController: AlertController) { }

  ngOnInit() {
  }

  isFormValid(): boolean {
    // Using non-null assertion operator to ensure `get` does not return undefined
    return this.altaform.valid &&
           (this.altaform.get('nombreproyecto')!.touched || this.altaform.get('nombreproyecto')!.dirty) &&
           (this.altaform.get('idempresa')!.touched || this.altaform.get('idempresa')!.dirty) &&
           (this.altaform.get('fecha_inicio')!.touched || this.altaform.get('fecha_inicio')!.dirty) &&
           (this.altaform.get('idlider')!.touched || this.altaform.get('idlider')!.dirty) &&
           (this.altaform.get('integrantesproyecto')!.touched || this.altaform.get('integrantesproyecto')!.dirty) &&
           (this.altaform.get('descripcion')!.touched || this.altaform.get('descripcion')!.dirty);
  }

  async altab() {
    if (!this.isFormValid()) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    var f = this.altaform.value;

    var proyecto = {
      nombreproyecto: f.nombreproyecto,
      idempresa: f.idempresa,
      idpersona: 1, // Cambia esto según tu lógica
      fecha_inicio: f.fecha_inicio,
      idlider: f.idlider,
      integrantesproyecto: f.integrantesproyecto,
      descripcion: f.descripcion
    };    

    this.proyectosService.crearProyecto(proyecto).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Proyecto registrado exitosamente.',
          buttons: ['OK']
        });
        await alert.present();
        this.altaform.reset();
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al registrar el proyecto.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
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
