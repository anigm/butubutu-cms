'use strict'
module.exports = mongoose => {
  const RoleSchema = new mongoose.Schema({
    name: { type: String },
    menus: [{ id: mongoose.ObjectId, name: String }],
  })
  return mongoose.model('Role', RoleSchema)
}
