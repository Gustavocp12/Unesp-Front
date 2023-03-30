import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  areaSelecionada: any;
  data: any;
  options: any;
  areas: any[] = [
    { name: 'Norte' },
    { name: 'Sul' },
    { name: 'Leste' },
    { name: 'Oeste' },
    ];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Baixo', 'Medio', 'Alto'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--vermelho-escuro')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--verde-claro'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--vermelho-claro-medio')
          ]
        }
      ]
    };
    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

}
