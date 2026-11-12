import { Injectable } from '@nestjs/common';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

@Injectable()
export class CourseService {

    getAllCourses():object{
        return {
            message: "All Products",
            data: []
        }
    }

    getCourseById(id:string): object{
        return {
            message: "Course fetched successfully",
            id: id,
        }
    }
    createcourse(): object{
        return {
            message: "Course created successfully",
            data: {
                name: "NestJS Fundamentals",
                code: "CS101",
                instructor: "John Doe",
                credits: 3
            }
        };
    }
    updateCourse(id:string, course: UpdateCourseDto): object{
        return { 
            message: "Course updated successfully",
            id: "5",
            data: { 
                name: "NestJS Advanced",
                code: "CS201" 
            } 
        }
    }

    patchCourse(id:string, course: UpdateCourseDto):object{
        return {
            message: "Course patched successfully",
            id: "5",
            updatedFields: ["name", "credits"] 
        }
    };
    
    deleteCourse(id:string){
        return { 
            message: "Course deleted successfully",
            id: "5" 
        };
    }
}

