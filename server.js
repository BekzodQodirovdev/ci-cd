import express from "express";
const PORT = process.env.PORT || 4070;

const app = express();

app.use("/greet", (req, res) => {
    res.send("SALOMLAR!");
});

app.use("/users", (req, res) => {
    res.send([
        {
            id: 1,
            name: "bekzod",
            age: 17,
            isMerred: false,
        },
    ]);
});

app.use("/app", (req, res) => {
    res.send("APPLOCATION!");
});

app.use((req, res) => {
    res.send("ASSALOMU ALAYKUM!.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
