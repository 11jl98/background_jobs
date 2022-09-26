import express from 'express'
import 'dotenv/config'
import { router } from './routes/index'

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.disable('x-powered-by')
app.use(router)

app.get('/', (req, res) => res.status(200).send('1.0.0'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
