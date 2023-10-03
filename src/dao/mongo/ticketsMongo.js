import { ticketsModel } from "../models/tickets.model";

export class TicketsMongo {
  constructor() {
    this.model = ticketsModel;
  }

  async createTicket(ticketInfo) {
    try {
      const result = await this.model.create(ticketInfo);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
