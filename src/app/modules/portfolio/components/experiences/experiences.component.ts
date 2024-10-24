import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Engenheiro de software Pleno',
        p: 'Basis Tecnologia - AGO de 2024 - Present',
      },
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      summary: {
        strong: 'Engenheiro de software Pleno',
        p: 'R2DA - NOV de 2023 - AGO de 2024',
      },
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      summary: {
        strong: 'Engenheiro de software Pleno',
        p: 'Lifters Tecnologia - OUT de 2023 - AGO de 2024',
      },
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      summary: {
        strong: 'Engenheiro de software Pleno',
        p: 'Minsait - FEV de 2022 - OUT de 2023',
      },
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ]);
}
