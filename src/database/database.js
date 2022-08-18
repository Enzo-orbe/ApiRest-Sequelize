import Sequelize from "sequelize";

export const sequelize = new Sequelize("projects", "postgres", "enzoorbe", {
  host: "localhost",
  dialect: "postgres",
});
