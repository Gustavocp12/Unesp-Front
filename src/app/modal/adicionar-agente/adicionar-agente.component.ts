import { Component } from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-adicionar-agente',
  templateUrl: './adicionar-agente.component.html',
  styleUrls: ['./adicionar-agente.component.scss'],
})
export class AdicionarAgenteComponent {
  nomeValue: any;
  emailValue: any;
  cpfValue: any;
  dataValue: any;

  constructor(public ref: DynamicDialogRef) { }

  showSave(toastSave: number){
    this.ref.close(toastSave);
  }

}
