const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: String,
    description: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    imageUrl: String,
    isOffer: Boolean,
    isDeleted: { type: Boolean, default: false }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
