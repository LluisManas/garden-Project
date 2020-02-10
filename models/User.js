const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: String,
    username: String,
    password: String,
    firstNAme: String,
    lastName: String,
    phoneNumber: Number,
    activityGroup: {
      type: String,
      enum: [
        "General",
        "Water",
        "Compost",
        "Maintenance",
        "Trees and Bushes",
        "Cleaning"
      ]
    },
    role: {
      type: String,
      enum: ["Admin", "regular member", "unregistered"]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
