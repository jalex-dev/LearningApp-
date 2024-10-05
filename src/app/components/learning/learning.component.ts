import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { LearningTableComponent } from "../learning-table/learning-table.component";
import { LearningDescriptionComponent } from "../learning-description/learning-description.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [LearningTableComponent, LearningDescriptionComponent],
  templateUrl: './learning.component.html',
  // styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit {
  courso!: Course;
  constructor(private service: CourseService) { }
  ngOnInit(): void {

    this.courso = this.service.getCourse();
  }

}
