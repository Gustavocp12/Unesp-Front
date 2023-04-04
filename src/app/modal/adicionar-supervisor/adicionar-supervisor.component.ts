import { Component } from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-adicionar-supervisor',
  templateUrl: './adicionar-supervisor.component.html',
  styleUrls: ['./adicionar-supervisor.component.scss'],
})
export class AdicionarSupervisorComponent {
  nomeValue: any;
  emailValue: any;
  cpfValue: any;
  dataValue: any;

  constructor(public ref: DynamicDialogRef) { }

  showSave(toastSave: number){
    this.ref.close(toastSave);
  }

}
