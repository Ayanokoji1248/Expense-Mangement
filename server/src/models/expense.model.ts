import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    receipt: {
        type: String
    },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"], default: "Pending"
    },
    approvedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]
});

export default mongoose.model("Expense", expenseSchema);
