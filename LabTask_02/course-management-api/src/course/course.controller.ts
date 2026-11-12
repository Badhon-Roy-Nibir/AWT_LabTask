import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Express } from 'express';
import { promises as fs } from 'fs';
import type { Multer } from 'multer';

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

  @Post('upload-course-material')
@UseInterceptors(
  FileInterceptor('file',{
 
  }),
)
 
async uploadProfilePic(
  @UploadedFile(
    new ParseFilePipe({
      validators:[
        new MaxFileSizeValidator({
          maxSize: 1024*1024*7,
        }),
        new FileTypeValidator({
          fileType: /image\/png/,
 
        }),
      ],
 
    }),
  )
  file: Express.Multer.File,
) {
    const fileName = Date.now() + file.originalname;
    const path = `./uploads/${fileName}`;
    await fs.writeFile(path, file.buffer);
 
    return { message: "Material uploaded successfully",
      courseId: "5",
      filename: "1234567890-notes.pdf",
      path: "uploads/1234567890-notes.pdf" 
    }
  }


}
