import mongoose, {
  Document,
  Schema,
} from "mongoose";

export interface ILead
  extends Document {
  name: string;
  email: string;
  status:
    | "New"
    | "Contacted"
    | "Qualified"
    | "Lost";
  source:
    | "Website"
    | "Instagram"
    | "Referral";
  createdAt: Date;
}

const LeadSchema =
  new Schema<ILead>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
      },

      status: {
        type: String,
        enum: [
          "New",
          "Contacted",
          "Qualified",
          "Lost",
        ],
        default: "New",
      },

      source: {
        type: String,
        enum: [
          "Website",
          "Instagram",
          "Referral",
        ],
        default:
          "Website",
      },
    },
    {
      timestamps: true,
    }
  );

LeadSchema.index({
  name: "text",
  email: "text",
});

export default mongoose.model<ILead>(
  "Lead",
  LeadSchema
);