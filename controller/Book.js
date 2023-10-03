import Book from "../models/BookModel.js";
import bcrypt from "bcrypt";

export const getBook = async (req, res) => {
  try {
    const book = await Book.findAll();

    if (book.length > 0) {
      return res.status(200).json({
        status: 200,
        data: book,
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

export const postBook = async (req, res) => {
  const { title, genre, author, year, isAvailable, image } = req.body;

  try {
    const book = await Book.create({
      title,
      genre,
      author,
      year,
      isAvailable,
      image,
    });

    if (book) {
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

export const putBook = async (req, res) => {
  const id = req.params.id;
  const { title, genre, author, year, isAvailable, image } = req.body;

  try {
    const bookbyid = await Book.findByPk(id);

    if (bookbyid == null) {
      return res.status(404).json({
        status: 404,
        message: "Book not found",
      });
    } else {
      const book = await Book.update(
        {
          title,
          genre,
          author,
          year,
          isAvailable,
          image,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (book) {
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

export const deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const bookbyid = await Book.findByPk(id);

    if (bookbyid == null) {
      return res.status(404).json({
        status: 404,
        message: "Book not found",
      });
    } else {
      const book = await Book.destroy({
        where: {
          id: id,
        },
      });

      if (book) {
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
