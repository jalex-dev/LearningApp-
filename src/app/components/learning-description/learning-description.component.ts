import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'learning-description',
  standalone: true,
  imports: [],
  templateUrl: './learning-description.component.html',
  //styleUrl: './learning-description.component.css'
})
export class LearningDescriptionComponent {
  @Input() courso!: Course
}
