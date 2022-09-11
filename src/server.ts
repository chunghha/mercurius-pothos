import Fastify from 'fastify';
import mercurius from 'mercurius';

import { schema } from './schema';

export const server = Fastify({
	logger: true
});

server.register(mercurius, {
	schema,
	subscription: true
});

server.listen({ port: 6060 });
