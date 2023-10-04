import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Book from "./BookModel.js";
import Users from "./UsersModel.js";

const { DataTypes } = Sequelize;

const History = db.define(
  "history",
  {
    idUser: {
      type: DataTypes.INTEGER,
    },
    idBook: {
      type: DataTypes.INTEGER,
    },
    dateBorrow: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    dateReturn: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

History.belongsTo(Users, {
  foreignKey: "idUser",
});

History.belongsTo(Book, {
  foreignKey: "idBook",
});

export default History;

(async () => {
  await db.sync();
})();
