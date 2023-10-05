import fs from "fs";
import path from "path";

export const uploudImage = async (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Berhasil Upload",
  });
};

export const getImage = async (req, res) => {
  const imagePath = path.join("images", req.params.image);
  console.log(imagePath);

  // Read the image file
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      // Set the content type to image/jpeg (or the appropriate content type for your image)
      res.contentType("image/jpeg");
      // Send the image data as the response
      res.send(data);
    }
  });
};
