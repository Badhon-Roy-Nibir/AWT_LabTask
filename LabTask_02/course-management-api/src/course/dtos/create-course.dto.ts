import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateCoutseDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    code: string;

    @IsString()
    @IsNotEmpty()
    instructor: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(6)
    @Type(()=>Number)
    credits: number;

    @IsOptional()
    description: string;
}