import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses():any{
    return this.courseService.getAllCourses();
  }
}
