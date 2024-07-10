const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  account_id: {
    type: mongoose.Types.ObjectId,
    ref: "Account",
    required: true,
    index: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Entry", entrySchema);
