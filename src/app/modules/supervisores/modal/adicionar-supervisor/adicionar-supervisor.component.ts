import { Component } from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";
import { Supervisores } from "../../../../core/interfaces/Supervisores";

@Component({
  selector: 'app-adicionar-supervisor',
  templateUrl: './adicionar-supervisor.component.html',
  styleUrls: ['./adicionar-supervisor.component.scss'],
})
export class AdicionarSupervisorComponent {

  Supervisor: Supervisores = {
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: new Date()
  };

  constructor(public ref: DynamicDialogRef) { }

  showSave(toastSave: number){
    this.ref.close(toastSave);
  }

}
