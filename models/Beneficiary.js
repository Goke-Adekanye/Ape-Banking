const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  from_account_id: {
    type: mongoose.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  to_email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email address",
    ],
  },
  to_account_no: {
    type: Number,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Beneficiary", beneficiarySchema);
