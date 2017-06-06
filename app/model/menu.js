'use strict'
module.exports = mongoose => {
  const MenuSchema = new mongoose.Schema({
    name: { type: String },
    url: { type: String },
    level: { type: Number }, // 一级和二级菜单即可
    image: { type: String },
  })
  return mongoose.model('Menu', MenuSchema)
}
