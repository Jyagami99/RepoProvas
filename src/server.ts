import app from "./app";

const PORT: number = Number(process.env.PORT || 3333);
app.listen(PORT, () => {
  console.log(`O servidor subiu na porta ${PORT}.`);
});
