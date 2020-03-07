import mongoose, { Mongoose } from 'mongoose'
import { environment } from '@config/environment'

mongoose.Promise = global.Promise

const connectToMongo = (): Promise<Mongoose> => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(`mongodb://${environment.mongoHost}:${environment.mongoPort}/${environment.mongoDb}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => resolve())
      .catch(e => reject(e))
  })
}

export { connectToMongo }
