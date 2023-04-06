import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BannerComponent } from './banner/banner.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExpLabComponent } from './exp-lab/exp-lab.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftComponent } from './hard-soft/hard-soft.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    BannerComponent,
    PresentacionComponent,
    ExpLabComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HardSoftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
