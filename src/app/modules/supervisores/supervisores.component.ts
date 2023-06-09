import {Component, OnDestroy, OnInit} from '@angular/core';
import { AdicionarSupervisorComponent } from "./modal/adicionar-supervisor/adicionar-supervisor.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, ConfirmEventType, FilterService, MessageService} from "primeng/api";
import {Supervisores} from "../../core/interfaces/Supervisores";

@Component({
  selector: 'app-supervisores',
  templateUrl: './supervisores.component.html',
  styleUrls: ['./supervisores.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService, FilterService]
})
export class SupervisoresComponent implements OnInit, OnDestroy {

  constructor(public dialogService: DialogService, public messageService: MessageService, private confirmationService: ConfirmationService, private filterService: FilterService) {}

  filteredSupervisors!: Supervisores[];
  searchValue: string = '';
  ref!: DynamicDialogRef;
  selectedSupervisor: any;
  inputValue: any;
  supervisorsList: Supervisores[] = [
    { id: 0, nome: 'Nome 1', email: 'exemplo@gmail.com', cpf: '', dataNascimento: new Date() },
    { id: 1, nome: 'Nome 2', email: 'exemplo@gmail.com', cpf: '', dataNascimento: new Date() },
    { id: 2, nome: 'Nome 3', email: 'exemplo@gmail.com', cpf: '', dataNascimento: new Date() },
    ];
  pegarId(id: any) {
    this.selectedSupervisor = this.supervisorsList.find((p: Supervisores) => p.id === id);
  }

  showSaveAgente(){
    this.ref = this.dialogService.open(AdicionarSupervisorComponent, {
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((toastSave) => {
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
      }
    });
  }

  filterProducts() {
    this.filteredSupervisors = this.filterService.filter(this.supervisorsList, ['nome', 'email'], this.searchValue, 'contains');
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  ngOnInit() {
  }
}
