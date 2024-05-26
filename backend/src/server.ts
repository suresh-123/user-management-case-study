import app from "./app";

const port: string | number = process.env.PORT || 5000;

app.listen(port, () => console.log("server running on this port", port));
