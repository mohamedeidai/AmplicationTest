/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SaleDetailWhereInput } from "./SaleDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SaleDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SaleDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailWhereInput)
  @IsOptional()
  @Field(() => SaleDetailWhereInput, {
    nullable: true,
  })
  every?: SaleDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailWhereInput)
  @IsOptional()
  @Field(() => SaleDetailWhereInput, {
    nullable: true,
  })
  some?: SaleDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailWhereInput)
  @IsOptional()
  @Field(() => SaleDetailWhereInput, {
    nullable: true,
  })
  none?: SaleDetailWhereInput;
}
export { SaleDetailListRelationFilter as SaleDetailListRelationFilter };
