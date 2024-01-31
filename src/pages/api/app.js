import { createRouter } from "next-connect"
const router = createRouter()

router.get(async (req, res) => {
    console.log(req)
    return res.status(200).json({ message: "success" });
})

export default router.handler();