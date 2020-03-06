import { prop, getModelForClass } from '@typegoose/typegoose'

class UserSchema {
  @prop()
  name?: string
}

const User = getModelForClass(UserSchema)

export default User
