const mongoose = require("mongoose");

const telecallerschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', 
        required: true,
      },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["telecaller"], 
        default: "telecaller",  
        required: true
    },
    username: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        required: true,
        default:"active"
    },
    number:{
        type:Number
    },
    address:{
        type:String
    },
    leads: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Lead"
        }
    ],
    totalcalls:{
        type:Number,
        default:0
    },
    answeredcalls:{
        type:Number,
        default:0
    },
    notansweredcalls:{
        type:Number,
        default:0
    },

    pending: {   
        type: Number,
        default: 0
    },
    history: [
        {
            leadId: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: "Lead",
                required: true
            },
            action: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
                default: Date.now
            },
            notes: {
                type: String
            },
            callbackTime: {
                type: Date,
              },
              callbackScheduled: {
                type: Boolean,
                default: false,
              },
        }
    ]
});

module.exports = telecallerschema;
