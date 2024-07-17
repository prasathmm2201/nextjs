import knex from "knex";
import DB from "./db";

export const DBConnection = knex(DB);