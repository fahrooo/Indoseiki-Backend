import Users from "../models/UsersModel.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (user == null) {
      return res.status(404).json({
        status: 404,
        message: "Email Not Found",
      });
    } else {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.status(200).json({
          status: 200,
          message: "Berhasil Login",
          data: user,
        });
      } else {
        return res.status(400).json({ status: 400, message: "Wrong Password" });
      }
    }
  } catch {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
