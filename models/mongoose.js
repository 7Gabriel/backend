const mongoose = require('mongoose')

module.exports.connect = async() => {
  const username = encodeURIComponent("");
  const password = encodeURIComponent("");
  const url = ``
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log('[INFO] Mongoose connected')
}