/* const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    firstNAme: String,
    lastName: String,
    phoneNumber: String,
    activityGroup: {
      type: String,
      enum: [
        "General",
        "Water",
        "Compost",
        "Mantainece",
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
module.exports = User; */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: String,
    username: String,
    password: String,
    firstNAme: String,
    lastName: String,
    imageUrl: {
      type: String,
      default:
        "https://www.pinclipart.com/picdir/big/34-349857_seed-png-clipart-plant-biology-png-transparent-png.png"
    },
    phoneNumber: Number,
    facebookID: String,
    displayName: String,
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
