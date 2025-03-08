import express from 'express'
import cors from 'cors'
import { routes } from './routes';
import { errorHendler } from './middleware/errorHandler';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'

const options=  {
  definition:{
    openapi: '3.0.0',
    info:{
      title:'API',
      version: '1.0.0',
    },
  },
  apis:[],
}

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(routes)
app.use(errorHendler)

export {app}
