import { Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses():any{
    return this.courseService.getAllCourses();
  }

  @Get(":id")
  getCourseById(@Param("id")id:string):any{
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse():any{
    return this.courseService.createcourse();
  }

  
}
