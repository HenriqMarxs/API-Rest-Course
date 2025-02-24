import express from 'express'
import cors from 'cors'
import { routes } from './routes';
import { errorHendler } from './middleware/errorHandler';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHendler)

export {app}
