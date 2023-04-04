import {Component, OnDestroy, OnInit} from '@angular/core';
import { AdicionarSupervisorComponent } from "../../modal/adicionar-supervisor/adicionar-supervisor.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, ConfirmEventType, FilterService, MessageService} from "primeng/api";

class toastSaveNumber {
  toastSave: number = 1;
}

@Component({
  selector: 'app-supervisores',
  templateUrl: './supervisores.component.html',
  styleUrls: ['./supervisores.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService, FilterService]
})
export class SupervisoresComponent implements OnInit, OnDestroy {

  constructor(public dialogService: DialogService, public messageService: MessageService, private confirmationService: ConfirmationService, private filterService: FilterService) {}

  filteredSupervisors!: any[];
  searchValue: string = '';
  ref!: DynamicDialogRef;
  selectedSupervisor: any;
  inputValue: any;
  supervisorsList: any = [
    { id: 0, name: 'Nome 1', email: 'exemplo@gmail.com' },
    { id: 1, name: 'Nome 2', email: 'exemplo@gmail.com' },
    { id: 2, name: 'Nome 3', email: 'exemplo@gmail.com' },
    ];
  pegarId(id: any) {
    this.selectedSupervisor = this.supervisorsList.find((p: any) => p.id === id);
  }

  showSaveAgente(){
    this.ref = this.dialogService.open(AdicionarSupervisorComponent, {
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((toastSave: toastSaveNumber) => {
      if (toastSave){
        this.messageService.add({ severity: 'success', summary: 'Supervisor salvo com sucesso!', detail: 'Foi enviado um email para o supervisor com seu usuário e senha' });
      }
    });
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Ao clicar em deletar o supervisor será excluído permanentemente!',
      header: 'Deseja deletar o supervisor?',
      icon: 'pi pi-info-circle text-red-500',
      rejectLabel: 'Cancelar',
      acceptLabel: 'Deletar',
      rejectIcon: 'pi pi-times',
      acceptIcon: 'pi pi-trash',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Excluido com sucesso!', detail: 'O supervisor foi excluido' });
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
    this.filteredSupervisors = this.filterService.filter(this.supervisorsList, ['name', 'email'], this.searchValue, 'contains');
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  ngOnInit() {
  }
}
