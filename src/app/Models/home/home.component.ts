import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = { icono: 'far fa-times-circle', accionMenu: true };

  constructor() { }

  ngOnInit() {

    this.abrirMenu();

  }

  abrirMenu() {

    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';

  }

  cerrarMenu() {

    document.getElementById('mySidebar').style.width = '30px';
    document.getElementById('main').style.marginLeft = '30px';

  }

  accionarMenu(event) {

    if (this.menu.accionMenu === true) {

      this.cerrarMenu();
      this.menu.accionMenu = false;
      this.menu.icono = 'fas fa-bars';

    } else if (this.menu.accionMenu === false) {

      this.abrirMenu();
      this.menu.accionMenu = true;
      this.menu.icono = 'far fa-times-circle';

    }

  }

}
