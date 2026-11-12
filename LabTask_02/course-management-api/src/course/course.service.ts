import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses():any{
        return {id:1};
    }

    getCourseById(id:string):any{
        return{id:id};
    }
    createcourse():any{
        return {message: "Course Created."};
    }
    updateCourse(id:string):any{
        return {message: "Course updated.", id:id};
    }

    patchCourse(id:string):any{
        return {message: "Course Patched.",id:id};
    }
    deleteCourse(id:string){
        return {message:"Course deleted.", id:id};
    }
}

