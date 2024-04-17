import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteCustomerServices } from '../services/DeleteCustomerServices';

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const customerServices = new DeleteCustomerServices();

    const customer = await customerServices.execute({ id });

    reply.send(customer);
  }
}

export { DeleteCustomerController };
