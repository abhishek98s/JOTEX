import mongoose from "mongoose"

const ConnectDB = (uri) => {
    mongoose.connect(uri)
}

export default ConnectDB