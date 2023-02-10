/* eslint-disable */
import type { Prisma, SeoulRent } from "@prisma/client";
export default interface PrismaTypes {
  SeoulRent: {
    Name: "SeoulRent";
    Shape: SeoulRent;
    Include: never;
    Select: Prisma.SeoulRentSelect;
    OrderBy: Prisma.SeoulRentOrderByWithRelationInput;
    WhereUnique: Prisma.SeoulRentWhereUniqueInput;
    Where: Prisma.SeoulRentWhereInput;
    RelationName: never;
    ListRelations: never;
    Relations: {};
  };
}
