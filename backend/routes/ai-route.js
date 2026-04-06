// import express from "express";
// // import { generateInterviewQuestions } from "../controller/ai-controller.js";
// import { generateQuestions } from "../controller/ai-controller.js";
// import { protect } from "../middlewares/auth-middleware.js";

// const router = express.Router();

// // router.post("/generate-questions", protect, generateInterviewQuestions);
// router.post("/generate-questions", protect, generateQuestions);
// router.post("/generate-explanation", protect, generateExplanation);

// export default router;

import express from "express";
import {
  generateExplanation,
  generateConceptExplanation,
} from "../controller/ai-controller.js";
import { protect } from "../middlewares/auth-middleware.js";

const router = express.Router();

// ✅ Generate questions
router.post("/generate-questions", protect, generateExplanation);

export default router;
