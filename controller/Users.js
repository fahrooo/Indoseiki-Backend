import Users from "../models/UsersModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
    try {
      const users = await Users.findAll();
  
      if (users.length > 0) {
        return res.status(200).json({
          status: 200,
          data: users,
        });
      } else {
        return res.status(404).json({
          status: 404,
          message: "Data Not Found",
        });
      }
    } catch {
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  };
  
  export const postUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
  
    try {
      const user = await Users.create({
        name: name,
        email: email,
        password: hashPassword,
      });
  
      if (user) {
        return res.status(200).json({
          status: 200,
          message: "Created successfully",
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "Created Failed",
        });
      }
    } catch {
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  };
  
  export const putUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
  
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
  
    try {
      const userbyid = await Users.findByPk(id);
  
      if (userbyid == null) {
        return res.status(404).json({
          status: 404,
          message: "User not found",
        });
      } else {
        const user = await Users.update(
          {
            name: name,
            email: email,
            password: hashPassword,
          },
          {
            where: {
              id: id,
            },
          }
        );
  
        if (user) {
          return res.status(200).json({
            status: 200,
            message: "Updated successfully",
          });
        } else {
          return res.status(400).json({
            status: 400,
            message: "Updated Failed",
          });
        }
      }
    } catch {
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  };
  
  export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const userbyid = await Users.findByPk(id);
  
      if (userbyid == null) {
        return res.status(404).json({
          status: 404,
          message: "User not found",
        });
      } else {
        const user = await Users.destroy({
          where: {
            id: id,
          },
        });
  
        if (user) {
          return res.status(200).json({
            status: 200,
            message: "Deleted successfully",
          });
        } else {
          return res.status(400).json({
            status: 400,
            message: "Deleted Failed",
          });
        }
      }
    } catch {
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  };
