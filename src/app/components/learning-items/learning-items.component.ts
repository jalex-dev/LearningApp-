import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'tr[learning-items]',
  standalone: true,
  imports: [],
  templateUrl: './learning-items.component.html',
  //styleUrl: './learning-items.component.css'
})
export class LearningItemsComponent {
  @Input() item!: Student
}
