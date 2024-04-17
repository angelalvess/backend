import { FastifyReply, FastifyRequest } from 'fastify';
import { ListCustomersServices } from '../services/ListCustomersServices';

class ListCostumersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCostumersService = new ListCustomersServices();

    const customers = await listCostumersService.execute();

    reply.send(customers);
  }
}

export { ListCostumersController };
