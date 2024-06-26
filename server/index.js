import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'

import clientRoutes from './routes/clientRoutes.js'
import generalRoutes from './routes/generalRoutes.js'
import managementRoutes from './routes/managementRoutes.js'
import salesRoutes from './routes/salesRoutes.js'
import authRoutes from './routes/auth.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('client', clientRoutes)
app.use('general', generalRoutes)
app.use('management', managementRoutes)
app.use('sales', salesRoutes)
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.log(err))
