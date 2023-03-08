import { CollectionConfig } from "payload/types";
import { tenant } from "../fields/tenant";
import { checkTenant, isAdmin } from "../utils/accessUtils";
import { addTenant } from "../utils/hooksUtils";

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    tenant,
  ],
  timestamps: false,
  access: {
    read: checkTenant,
    update: isAdmin,
    delete: isAdmin,
    create: isAdmin,
  },
  hooks: {
    beforeChange: [addTenant],
  },
};

export default Tags;
