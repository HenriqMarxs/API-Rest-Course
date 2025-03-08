import { env } from "../env";
import { app } from "./app";


app.listen(env.PORT, ()=>{
    console.log( `sever running on port ${env.PORT} :P`)
    console.log( `API's docs avalible at  GET /docs`)
})
