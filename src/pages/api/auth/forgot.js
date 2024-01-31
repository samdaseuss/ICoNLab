import nc from "next-connect";
// import bcrypt from "bcrypt";
// import { validateEmail } from "../../../utils/validation";
import db from "../../../../utils/db";
import User from "../../../../models/User";
import { createActivationToken, createResetToken } from "../../../../utils/tokens";
import { sendEmail } from "../../../../utils/sendEmail";
import { resetEmailTemplate } from "../../../../emails/resetEmailTemplates";
const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "일치하는 이메일이 없습니다." });
    const user_id = createResetToken({ id: user._id.toString() });
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
    sendEmail(email, url, "", "패스워드 초기화", resetEmailTemplate);
    await db.disconnectDb();
    res.json({ message: "이메일를 확인해 패스워드를 초기화하세요." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;