import { ProductManagerMongo } from "./mongo/productManagerMongo.js";
import { CartsMongo } from "./mongo/cartsMongo.js";
import { connectDB } from "../config/dbConnection.js";
import { UsersMongo } from "./managers/users.mongo.js";
import { TicketsMongo } from "./mongo/ticketsMongo.js";

connectDB();
export const productsDao = new ProductManagerMongo();

export const ticketsDao = new TicketsMongo();
export const cartsDao = new CartsMongo();

export const usersDao = new UsersMongo();
