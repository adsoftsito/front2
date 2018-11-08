import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  public buses = [];
  // selectedUsuario: any;

  constructor(private service: BusService) {}

  ngOnInit() {
    this.service.getBuses()
    .subscribe(data => this.buses = data);
    // this.selectedUsuario = "";
  }
  ngOnChanges(){
    this.service.getBuses()
    .subscribe(data => this.buses = data);
    // this.selectedUsuario = "";
  }
  deleteBus(id) {
    if(confirm("Desea eliminar autobus?")){
      this.service.deleteBus(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }

  // readyForEdition(usuario){
  //   this.selectedUsuario = usuario;
  // }

  // editUsuario(usuario){
  //   this._usuarioService.updateUsuarios(usuario.name, usuario.email, usuario.phone_number, usuario.id)
  //   .subscribe((res)=>{
  //     this.ngOnChanges();
  //   });
  // }

}




