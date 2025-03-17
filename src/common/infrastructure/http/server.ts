import { error } from "console";
import { env } from "../env";
import { dataSource } from "../typeorm";
import { app } from "./app";



dataSource.initialize()
  .then(()=>{
    app.listen(env.PORT, ()=>{
      console.log( `sever running on port ${env.PORT} :P`)
      console.log( `API's docs avalible at  GET /docs`)
  })
}).catch( error=>{
  console.error('Error initializing data source', error)
})


