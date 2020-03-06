import mongoose from 'mongoose'
import { environment } from '@config/environment'

mongoose.Promise = global.Promise

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${environment.mongo_host}:${environment.mongo_port}/${environment.mongo_db}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((result) => resolve())
      .catch((e) => reject(e))
  })
}

export { connectToMongo }
