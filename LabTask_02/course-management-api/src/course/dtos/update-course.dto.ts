import { PartialType } from "@nestjs/mapped-types";
import { CreateCoutseDto } from "./create-course.dto.js";

export class UpdateCourseDto extends PartialType(CreateCoutseDto){
    
}