import prismaClient from '../prisma';

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerServices {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      return { error: 'Name and email are required' };
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerServices };
