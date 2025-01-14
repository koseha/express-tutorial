import express from "express";
import router from "./routes/index.js";

const app = express();

app.use(express.json());

// 포트 설정
const PORT = 8000;

app.use("/", router);

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
