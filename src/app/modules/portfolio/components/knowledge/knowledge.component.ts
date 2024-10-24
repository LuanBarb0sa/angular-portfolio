import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento Angular'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento Java'
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de conhecimento Aws'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento React'
    },
    {
      src: 'assets/icons/knowledge/vue.svg',
      alt: 'Ícone de conhecimento Vue'
    }
  ])

}
