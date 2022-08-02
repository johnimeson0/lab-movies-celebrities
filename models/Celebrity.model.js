//  Add your code here
const {Schema, model} = require('mongoose')

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebSchema);