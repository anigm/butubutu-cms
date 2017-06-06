'use strict'
module.exports = mongoose => {
  const UserSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    roleId: { type: Schema.Types.ObjectId },

  })
  return mongoose.model('User', UserSchema)
}
