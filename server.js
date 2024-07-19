// Import necessary modules
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set view engine
app.set("view engine", "ejs");


// Define your main route
app.get("/", (req, res) => {
    res.render("index", { text: 'World' });
});

// Import and use the userRouter
const userRouter = require("./routes/users");
const { error } = require('console');
app.use("/users", userRouter);


// Start the server
const start = async () => {
    try{
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });
        
    } catch (error){
        console.log(error)
    }
}

start();
