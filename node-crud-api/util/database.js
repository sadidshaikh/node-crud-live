import Sequelize from "sequelize";
import { config } from "dotenv";
config();

const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default sequelize;
