const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    activityName: String,
    group: {
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
    description: String,
    memebers: String,
    creationDate: Date,
    expirationDate: Date,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    conmpleted: { type: Boolean, default: false }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
