import express from "express";
import { Content } from "../controllers/ai.api.controller.js";
const route = express.Router();
route.post("/user/post", Content);
export default route;
//# sourceMappingURL=ai.api.route.js.map