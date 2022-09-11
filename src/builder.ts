import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';

import PrismaTypes from '../prisma/pothos-types';
import { db } from './db';

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
	plugins: [PrismaPlugin],
	prisma: {
		client: db,
		filterConnectionTotalCount: true
	}
});
