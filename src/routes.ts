import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';

import { CreateCustomerController } from '././controllers/CreateCostumerController';
import { ListCostumersController } from '././controllers/ListCostumersController';
import { DeleteCustomerController } from './controllers/DeleteCostumerController';

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: 'world' };
  });

  fastify.post(
    '/customer',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    '/customer',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCostumersController().handle(request, reply);
    }
  );

  fastify.delete(
    '/customer',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );
}
