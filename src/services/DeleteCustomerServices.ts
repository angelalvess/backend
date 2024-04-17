import prismaClient from '../prisma';

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerServices {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error('Customer id is required');
    }

    const findCostumer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });
    if (!findCostumer) {
      throw new Error('Customer not found');
    }

    await prismaClient.customer.delete({
      where: {
        id: findCostumer.id,
      },
    });

    return { message: 'Customer deleted successfully' };
  }
}

export { DeleteCustomerServices };
