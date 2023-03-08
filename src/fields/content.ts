import { Field } from "payload/types";
import MarkdownField from "../components/markdown/MarkdownField";

const content: Field = {
  name: "content",
  type: "text",
  admin: {
    components: {
      Field: MarkdownField,
    },
  },
};

export default content;
