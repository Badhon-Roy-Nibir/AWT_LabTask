import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses():any{
        return {id:1};
    }
}
