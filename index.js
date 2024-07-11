import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Approutes from './src/routes/index.js'
import mongoose, { connect } from 'mongoose'



dotenv.config()

const connectDB = async () => {
try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    // mongoose.connect(`${process.env.dbUrl}`)
    });
   console.log("mongooDB coneccted")
    
} catch (error) {
    console.log('MongoDB connection failed:',error)
    process.exit(1); 
}
};

connectDB();

const PORT = process.env.PORT || 8000;
const app = express()

app.use(cors())
app.use(express.json())
app.use('/',Approutes)


app.listen(PORT,()=>console.log(`App is listening ${PORT}`))