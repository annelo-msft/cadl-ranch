import { Router } from "express";
import { coverageService } from "../services/index.js";

const router = Router();
export const coverageRouter: Router = router;

router.post("/report/clear", (_req, res) => {
  coverageService.reset();
  return res.status(200).send().end();
});

router.get("/report/:category?", (req, res) => {
  const category = req.params.category?.toString() ?? "vanilla";
  return res.json(coverageService.getAllForCategory(category)).end();
});
