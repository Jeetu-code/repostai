import { userContent } from "../services/ai.api.service.js";
export const Content = async (req, res) => {
    try {
        const data = req.body;
        const response = await userContent(data);
        res.status(200).json({ message: "success", airesponse: response });
    }
    catch (err) {
        console.log(err);
    }
};
//# sourceMappingURL=ai.api.controller.js.map