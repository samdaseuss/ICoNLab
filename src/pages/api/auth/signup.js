import { createRouter } from "next-connect";
import bcrypt from "bcrypt";
import { validateEmail } from "../../../../utils/validation";
import db from "../../../../utils/db";
import User from "../../../../models/User";
import { createActivationToken } from "../../../../utils/tokens";
import { sendEmail } from "../../../../utils/sendEmail";
import { activateEmailTemplate } from "../../../../emails/activatedEmailtemplate";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "필드를 모두 채워주세요" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "올바르지 않은 이메일 형식입니다." });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "이미 가입된 이메일입니다." });
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "패스워드는 최소 6글자 이상이여야 합니다." });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });
    const addedUser = await newUser.save();
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, "", "Activate your account.", activateEmailTemplate);

    await db.disconnectDb();
    return res.json({ message: "가입되었습니다. 이메일 인증을 해서 회원가입을 마쳐주세요!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });s
  }
});

export default router.handler();