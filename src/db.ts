import { PrismaClient } from '@prisma/client';

import { logger } from './logger';

export const db = new PrismaClient({
	log: [{ level: 'query', emit: 'event' }, 'info', 'warn', 'error'],
	errorFormat: 'pretty'
});

db.$on('query', (e: any) => {
	logger.info(e);
});
