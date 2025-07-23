const mongoose = require("mongoose");

const strategySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["team", "agent"],
      default: "agent",
    },

    agent: {
      type: String,
      default: null, 
    },

    map: {
      type: String,
      required: true,
    },

    site: {
      type: String,
      enum: ["A", "B", "Mid", "Both", "Unknown"],
      default: "Unknown",
    },

    description: {
      type: String,
      trim: true,
    },

    placements: [
      {
        x: Number,
        y: Number,
        type: {
          type: String,
          enum: ["agent", "ability"],
        },
        iconName: String,
        note: String,
        direction: Number, 
      },
    ],

    isAttacking: {
      type: Boolean,
      default: true,
    },

    videoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Strategy", strategySchema);
