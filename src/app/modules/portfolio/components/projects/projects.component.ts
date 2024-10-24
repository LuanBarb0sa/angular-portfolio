import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/sefaz.jpg',
      alt: 'Projeto SEFAZ-PB',
      title: 'Secretaria de Estado da Receita da Paraíba',
      width: '100px',
      height: '51px',
      description: 'Projeto de modernização da Secretaria de Estado da Receita da Paraíba, com o objetivo de melhorar a arrecadação de impostos e a fiscalização de mercadorias.',
      links : [
        {
          name: 'SEFAZ-PB',
          url: 'https://www.receita.pb.gov.br/'
        }
      ]
    }
  ])

}
