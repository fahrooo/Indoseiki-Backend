import Book from "../models/BookModel.js";
import History from "../models/HistoryModel.js";
import Users from "../models/UsersModel.js";

export const getHistory = async (req, res) => {
  try {
    const history = await History.findAll({
      include: [
        { model: Users },
        {
          model: Book,
        },
      ],
    });

    if (history.length > 0) {
      return res.status(200).json({
        status: 200,
        data: history,
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      err,
    });
  }
};

export const postHistory = async (req, res) => {
  const { idUser, idBook, dateBorrow, dateReturn } = req.body;

  try {
    const history = await History.create({
      idUser,
      idBook,
      dateBorrow,
      dateReturn,
    });

    if (history) {
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

export const putHistory = async (req, res) => {
  const id = req.params.id;
  const { idUser, idBook, dateBorrow, dateReturn } = req.body;

  try {
    const historybyid = await History.findByPk(id);

    if (historybyid == null) {
      return res.status(404).json({
        status: 404,
        message: "History not found",
      });
    } else {
      const history = await History.update(
        {
          idUser,
          idBook,
          dateBorrow,
          dateReturn,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (history) {
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

export const deleteHistory = async (req, res) => {
  const id = req.params.id;

  try {
    const history = await History.findByPk(id);

    if (history == null) {
      return res.status(404).json({
        status: 404,
        message: "History not found",
      });
    } else {
      const history = await History.destroy({
        where: {
          id: id,
        },
      });

      if (history) {
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
