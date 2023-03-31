import {Component, OnDestroy, OnInit} from '@angular/core';
import { AdicionarAgenteComponent } from "../../modal/adicionar-agente/adicionar-agente.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";

class toastSaveNumber {
  toastSave: number = 1;
}

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss'],
  providers: [DialogService, MessageService]
})
export class AgentesComponent implements OnInit, OnDestroy {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}
  ref!: DynamicDialogRef;
  selectedProduct: any;
  inputValue: any;
  products: any = [
    { id: 0, name: 'Nome 1', email: 'exemplo@gmail.com' },
    { id: 1, name: 'Nome 2', email: 'exemplo@gmail.com' },
    { id: 2, name: 'Nome 3', email: 'exemplo@gmail.com' },
    ];
  pegarId(id: any) {
    this.selectedProduct = this.products.find((p: any) => p.id === id);
    console.log(this.selectedProduct);
  }

  showSaveAgente(){
    this.ref = this.dialogService.open(AdicionarAgenteComponent, {
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((toastSave: toastSaveNumber) => {
      if (toastSave){
        this.messageService.add({ severity: 'success', summary: 'Agente salvo com sucesso!', detail: 'Foi enviado um email para o agente com seu usuário e senha' });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  ngOnInit() {
  }
}
