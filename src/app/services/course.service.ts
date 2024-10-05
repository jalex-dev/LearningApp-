import { Injectable } from '@angular/core';
import { STUDENTS_DATA } from '../data/test.data';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesData: Course = STUDENTS_DATA;
  constructor() { }
  getCourse(): Course {
    return this.coursesData;
  }
}
