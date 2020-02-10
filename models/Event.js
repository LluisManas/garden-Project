const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventName: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    description: String,
    eventDate: Date
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
