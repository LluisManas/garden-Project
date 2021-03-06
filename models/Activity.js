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
        "Trees-and-bushes",
        "Cleaning"
      ]
    },
    description: String,
    /* members: String, */
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    completed: { type: Boolean, default: false }
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
