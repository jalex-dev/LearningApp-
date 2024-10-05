import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.model';
import { LearningItemsComponent } from "../learning-items/learning-items.component";

@Component({
  selector: 'learning-table',
  standalone: true,
  imports: [LearningItemsComponent],
  templateUrl: './learning-table.component.html',
  //styleUrl: './learning-table.component.css'
})
export class LearningTableComponent {
  @Input() students!: Student[];

}
