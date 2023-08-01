import { User } from "../../models/index.js";
import path from "path";
import fs from "fs/promises";

export const updateAvatars = async (req, res) => {
  // console.log(req.file);
  // console.log(req.user);
  const { _id } = req.user;
  const { path: uploadPath, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  // console.log(fileName);
  const avatarsPath = path.resolve("public", "avatars", fileName);
  await fs.rename(uploadPath, avatarsPath);
  const avatarURL = path.relative("public", fileName);
  console.log(avatarURL);

  await User.findByIdAndUpdate(_id, { avatarURL });

  // res.json({
  //   avatarURL,
  // });
};

export default updateAvatars;
