import { writeFileSync } from 'fs';

import { lexicographicSortSchema, printSchema } from 'graphql';

import { builder } from './builder';
import { db } from './db';

builder.prismaObject('SeoulRent', {
	fields: t => ({
		id: t.exposeInt('id'),
		year: t.exposeString('year'),
		districtCode: t.exposeString('districtCode'),
		districtName: t.exposeString('districtName'),
		neighborhoodCode: t.exposeString('neighborhoodCode'),
		neighborhoodName: t.exposeString('neighborhoodName'),
		lotCode: t.exposeString('lotCode'),
		lotType: t.exposeString('lotType'),
		mainNumber: t.exposeString('mainNumber'),
		subNumber: t.exposeString('subNumber'),
		floor: t.exposeString('floor'),
		contractDate: t.exposeString('contractDate'),
		rentType: t.exposeString('rentType'),
		rentalSpace: t.exposeString('rentalSpace'),
		deposit: t.exposeString('deposit'),
		rent: t.exposeString('rent'),
		buildingName: t.exposeString('buildingName'),
		constructionYear: t.exposeString('constructionYear'),
		buildingUse: t.exposeString('buildingUse'),
		term: t.exposeString('term'),
		classification: t.exposeString('classification'),
		renewalRight: t.exposeString('renewalRight'),
		previousDeposit: t.exposeString('previousDeposit'),
		previousRent: t.exposeString('previousRent')
	})
});

const DEFAULT_NUMBER_OF_RECORDS = 10;

builder.queryType({
	fields: t => ({
		seoulRent: t.prismaField({
			type: 'SeoulRent',
			nullable: true,
			args: {
				id: t.arg.int({ required: true })
			},
			resolve: (query, _, args) =>
				db.seoulRent.findUnique({
					...query,
					where: { id: Number.parseInt(String(args.id), 10) }
				})
		}),
		yearSelection: t.prismaField({
			type: ['SeoulRent'],
			nullable: true,
			args: {
				year: t.arg.string({ required: true }),
				take: t.arg.int({ required: false })
			},
			resolve: (query, _, args) =>
				db.seoulRent.findMany({
					...query,
					where: { year: args.year },
					take: Number.parseInt(String(args.take)) || DEFAULT_NUMBER_OF_RECORDS
				})
		})
	})
});

export const schema = builder.toSchema();

const schemaAsString = printSchema(lexicographicSortSchema(schema));
writeFileSync('./src/schema.graphql', schemaAsString);
