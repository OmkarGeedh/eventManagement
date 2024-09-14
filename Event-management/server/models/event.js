const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        event_id: {
            type: String,
            requird: true,
        },
        name: {
            type: String,
        },
        venue: {
            type: String,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        cover: {
            type: String,
            default:
            "",
        },
        profile: {
            type: String,
            default:
                "",
        },
        organizer: {
            type: String,
        },
        participants: [],
    },
    { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = {
    Event,
    eventSchema,
};
