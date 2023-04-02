import {Component, OnDestroy, OnInit} from '@angular/core';
import { AdicionarAgenteComponent } from "../../modal/adicionar-agente/adicionar-agente.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, ConfirmEventType, FilterService, MessageService} from "primeng/api";

class toastSaveNumber {
  toastSave: number = 1;
}

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService, FilterService]
})
export class AgentesComponent implements OnInit, OnDestroy {

  constructor(public dialogService: DialogService, public messageService: MessageService, private confirmationService: ConfirmationService, private filterService: FilterService) {}

  filteredAgents!: any[];
  searchValue: string = '';
  ref!: DynamicDialogRef;
  selectedAgent: any;
  inputValue: any;
  agentsList: any = [
    { id: 0, name: 'Nome 1', email: 'exemplo@gmail.com' },
    { id: 1, name: 'Nome 2', email: 'exemplo@gmail.com' },
    { id: 2, name: 'Nome 3', email: 'exemplo@gmail.com' },
    ];
  pegarId(id: any) {
    this.selectedAgent = this.agentsList.find((p: any) => p.id === id);
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

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Ao clicar em deletar o agente será excluído permanentemente!',
      header: 'Deseja deletar o agente?',
      icon: 'pi pi-info-circle text-red-500',
      rejectLabel: 'Cancelar',
      acceptLabel: 'Deletar',
      rejectIcon: 'pi pi-times',
      acceptIcon: 'pi pi-trash',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Excluido com sucesso!', detail: 'O agente foi excluido' });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'info', summary: 'Operação cancelada!', detail: 'A exclusão foi cancelada' });
            break;
        }
      }
    });
  }

  filterProducts() {
    this.filteredAgents = this.filterService.filter(this.agentsList, ['name', 'email'], this.searchValue, 'contains');
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  ngOnInit() {
  }
}
