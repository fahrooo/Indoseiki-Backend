import Book from "../models/BookModel.js";
import { Op } from "sequelize";

export const getBook = async (req, res) => {
  const {
    isSearchTitle,
    title,
    isSearchGenre,
    genre,
    isSearchAuthor,
    author,
    isSearchYear,
    year,
  } = req.body;
  const {
    isTitle,
    orderByTitle,
    isGenre,
    orderByGenre,
    isAuthor,
    orderByAuthor,
  } = req.body.filter;

  if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
          ],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == false &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ title: { [Op.substring]: title } }, { genre: genre }],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == false &&
    isSearchYear == false &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ title: { [Op.substring]: title } }],
        },
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
        ],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }, { author: { [Op.substring]: author } }],
        },
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == false &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { author: { [Op.substring]: author } },
          ],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { year: year },
          ],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { year: year },
          ],
        },
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
          ],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [["genre", orderByGenre]],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { genre: genre },
            { author: { [Op.substring]: author } },
            { year: year },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [
            { title: { [Op.substring]: title } },
            { author: { [Op.substring]: author } },
          ],
        },
        order: [
          ["title", orderByTitle],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == false &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ title: { [Op.substring]: title } }],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == true &&
    isSearchGenre == false &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ title: { [Op.substring]: title } }, { year: year }],
        },
        order: [["title", orderByTitle]],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == true &&
    isTitle == false &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }, { year: year }],
        },
        order: [["genre", orderByGenre]],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == true &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }, { year: year }],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == false &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == true
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }, { author: { [Op.substring]: author } }],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
          ["author", orderByAuthor],
        ],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == true &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }, { author: { [Op.substring]: author } }],
        },
        order: [
          ["title", orderByTitle],
          ["genre", orderByGenre],
        ],
      });

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
  } else if (
    isSearchTitle == false &&
    isSearchGenre == true &&
    isSearchAuthor == true &&
    isSearchYear == false &&
    isTitle == true &&
    isGenre == false &&
    isAuthor == false
  ) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.and]: [{ genre: genre }, { author: { [Op.substring]: author } }],
        },
        order: [["title", orderByTitle]],
      });

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
  } else {
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
