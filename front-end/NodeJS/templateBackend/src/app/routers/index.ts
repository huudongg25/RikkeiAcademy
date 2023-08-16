import { Express } from "express";
import uploadRoute from "./upload.route";
export default function Router(app: Express) {
  uploadRoute(app);
}
