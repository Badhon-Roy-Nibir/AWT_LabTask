import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses():any{
        return {id:1};
    }

    getCourseById(id:string):any{
        return{id:id};
    }
}
