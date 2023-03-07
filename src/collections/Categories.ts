import { CollectionConfig } from "payload/types";
import { Tenant } from "../fields/Tenant";
import { checkTenant, isAdmin } from "../utils/accessUtils";
import { addTenant } from "../utils/hooksUtils";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    Tenant,
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

export default Categories;
