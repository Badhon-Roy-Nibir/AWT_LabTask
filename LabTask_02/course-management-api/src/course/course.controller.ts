import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

  @Put(":id")
  updateCourse(@Param("id") id: string){
    return this.courseService.updateCourse(id);
  }

  @Patch(":id")
  patchCourse(@Param("id")id:string){
    return this.courseService.patchCourse(id);
  }

  @Delete(":id")
  deleteCourse(@Param("id")id:string){
    return this.courseService.deleteCourse(id);
  }


}
