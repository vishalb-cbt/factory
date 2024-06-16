import { Entity } from "./Entity";

interface Order {
    id: string;
    product: string;
    quantity: number
}

class OrderEntity implements Entity {
  private orders: Order[] = [];

  async create(data: Order): Promise<Order> {
    const newOrder = { ...data, id: `${Date.now()}` };
    this.orders.push(newOrder);
    return newOrder;
  }

  async read(id: string): Promise<Order> {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      throw new Error(`Order not found with ID: ${id}`);
    }
    return order;
  }

  async update(id: string, data: Order): Promise<Order> {
    let updatedOrder: Order | null = null;
    this.orders = this.orders.map((order) => {
      if (order.id === id) {
        updatedOrder = { ...order, ...data };
        return updatedOrder;
      }
      return order;
    });
    if (!updatedOrder) {
      throw new Error(`Order not found with ID: ${id}`);
    }
    return updatedOrder;
  }

  async delete(id: string): Promise<void> {
    const initialLength = this.orders.length;
    this.orders = this.orders.filter((order) => order.id !== id);
    if (this.orders.length === initialLength) {
      throw new Error(`Order not found with ID: ${id}`);
    }
  }
}

export { OrderEntity };
