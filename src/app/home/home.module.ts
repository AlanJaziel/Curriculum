import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DatosacadComponent } from './datosacad/datosacad.component';
import { DatosperComponent } from './datosper/datosper.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { CertificaComponent } from './certifica/certifica.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { ConsultaproyectosComponent } from './proyectos/consultaproyectos/consultaproyectos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage,DatosacadComponent,DatosperComponent,ExperienciaComponent,ProyectosComponent,PublicacionComponent,CertificaComponent,MainComponent,HeadComponent,FootComponent,ConsultaproyectosComponent]
})
export class HomePageModule {}
