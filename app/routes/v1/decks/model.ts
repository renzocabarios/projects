import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { IDeckModel } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<IDeckModel>(
  {
    name: {
      type: String,
      required: true,
    },
    memories: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: RESOURCE.MEMORIES,
        },
      ],
      default: [],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.DECKS, schema);
