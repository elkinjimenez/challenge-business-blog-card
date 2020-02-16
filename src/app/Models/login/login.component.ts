import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  datosLogueo = { texto: 'Ingresar', usuario: '', clave: '', enviar: false };

  ngOnInit() { }

  activarEnvio(event) {

    if (this.datosLogueo.usuario !== '' && this.datosLogueo.clave !== '') {

      this.datosLogueo.enviar = true;

    } else {

      this.datosLogueo.enviar = false;

    }

  }

  validarDatos(event) {

    this.datosLogueo.enviar = false;

    this.datosLogueo.texto = 'Cargando...';

  }

}
