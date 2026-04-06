// // //
// // import dotenv from "dotenv";
// // import { connectDB } from "./config/database-config.js";

// // import express from "express";
// // import cors from "cors"; // cross origin resource sharing (browser blocks the request which comes from anywhere but localhost:8000)
// // // 1) we are importing express module which we installed using npm i

// // import userRoutes from "./routes/auth-route.js";

// // // 2) call/invoke the function
// // let app = express(); // object = {listen}

// // app.use(
// //   cors({
// //     origin: "http://localhost:5173",
// //   }),
// // );

// // app.use(express.urlencoded({ extended: true })); // this
// // app.use(express.json());

// // app.use("/api/auth", userRoutes); // http://localhost:9001/api/auth/signup

// // // 3) assign a port number to our server
// // app.listen(9001, () => {
// //   console.log("Server Started.....");
// // });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./config/database-config.js";
// import userRoutes from "./routes/auth-route.js";
// import sessionRoutes from "./routes/session-route.js";
// import aiRoutes from "./routes/ai-route.js";

// app.use("/api/ai", aiRoutes);

// dotenv.config();

// let app = express();

// //  YE LINE MISSING THI
// connectDB();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   }),
// );

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use("/api/auth", userRoutes);
// app.use("/api/sessions", sessionRoutes);
// // app.use("/api/ai", aiRoutes);

// app.listen(9001, () => {
//   console.log("Server Started.....");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database-config.js";
import userRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-route.js";

dotenv.config();

let app = express(); // ✅ FIRST app banao

// DB connect
connectDB();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/ai", aiRoutes); // ✅ YAHAN ADD KARO (correct place)

// Server start
app.listen(9001, () => {
  console.log("Server Started.....");
});
