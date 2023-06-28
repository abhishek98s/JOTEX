import express from "express"
import dotenv from "dotenv"
import sd from "express-async-errors"

// Database
import ConnectDB from "./db/connect.js"

// Routes
import UserRouter from "./routes/user.js";

// middleware
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from './middleware/errorhandler.js'


const app = express();
dotenv.config();
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send(`<h1>Jotex: Job Portal App`)
})

//Route
app.use('/api/v1/auth', UserRouter)


// middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const PORT = process.env.PORT || 5000;

const start = () => {
    try {
        ConnectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server listing on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()