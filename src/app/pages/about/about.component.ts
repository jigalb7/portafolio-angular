import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
/*en ete constructor se declara el tipo y nombre de esta de este componente,
 en este caso es  public infoServiceEquipo: InfoPaginaService*/
  constructor(public infoServiceEquipo: InfoPaginaService) { }

  ngOnInit() {
  }

}
