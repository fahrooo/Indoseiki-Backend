import multer from "multer";

const currentDate = new Date();

// Get the year, month, and day components
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
const day = String(currentDate.getDate()).padStart(2, "0");

// Create the "yyyy-mm-dd" formatted string
const formattedDate = `${year}-${month}-${day}`;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, formattedDate + "-" + file.originalname);
  },
});

// Create the multer instance
export const upload = multer({ storage: storage });
