import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MainComponent } from './main/main.component';
import { DatosacadComponent } from './datosacad/datosacad.component';
import { DatosperComponent } from './datosper/datosper.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CertificaComponent } from './certifica/certifica.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ConsultaproyectosComponent } from './proyectos/consultaproyectos/consultaproyectos.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'datosaca',
    component: DatosacadComponent,
  },
  {
    path: 'datosper',
    component: DatosperComponent,
  },
  {
    path: 'exper',
    component: ExperienciaComponent,
  },
  {
    path: 'certif',
    component: CertificaComponent,
  },
  {
    path: 'proy',
    component: ProyectosComponent,
  },
  {
    path: 'public',
    component: PublicacionComponent,
  },
  {
    path: 'cproy',
    component: ConsultaproyectosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
