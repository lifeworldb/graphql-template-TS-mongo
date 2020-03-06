import { IResolvers } from 'graphql-tools'
import User from '@models/User'

const userResolver: IResolvers = {
  Query: {
    getUsers: (_:void, { limit }) => {
      return User.find().limit(limit)
    },
    getUser: (_:void, { id }) => {
      return new Promise((resolve, reject) => {
        User.findById({ _id: id}, (err, user) => {
          if (err) reject(err)
          else resolve(user)
        })
      })
    }
  },
  Mutation: {
    creteUser: (_:void, { input: { name } }) => {
      const newUser = {
        name
      }

      return new Promise((resolve, reject) => {
        User.create(newUser)
          .then((user) => resolve(user))
          .catch((e) => reject(e))
      })
    },
    updateUser: (_:void, { input }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ _id: input.id}, input, { new: true }, (err, user) => {
          if (err) reject(err)
          else resolve(user)
        })
      })
    },
    deleteUser: (_:void, { id }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove({ _id: id}, (err) => {
          if (err) reject(err)
          else resolve('The user was successfully deleted')
        })
      })
    }
  }
}

export default userResolver
