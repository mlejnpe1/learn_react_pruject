import express from "express";

const app = express();

app.get("/api/notes", (req,res) =>{
    res.status(200).send("you got 5 notes..");
})

app.post("/api/notes", (req,res) =>{
    res.status(201).send("your note has been created succesfully..");
})

app.listen(5001, () =>{
    console.log("Server started on PORT: 5001");
});