import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

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
  updateCourse(@Param("id") id: string, @Body() course: UpdateCourseDto){
    return this.courseService.updateCourse(id, course);
  }

  @Patch(":id")
  patchCourse(@Param("id")id:string, @Body() course: UpdateCourseDto){
    return this.courseService.patchCourse(id, course);
  }

  @Delete(":id")
  deleteCourse(@Param("id")id:string){
    return this.courseService.deleteCourse(id);
  }


}
