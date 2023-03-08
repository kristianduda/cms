import { CollectionConfig } from "payload/types";
import { tenant } from "../fields/tenantField";
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

export default Categories;
