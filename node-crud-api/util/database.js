import Sequelize from "sequelize";

const sequelize = new Sequelize("node-crud-live", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
