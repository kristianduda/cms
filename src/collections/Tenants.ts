import { CollectionConfig } from "payload/types";
import { getTenant } from "../utils/accessUtils";

const Tenants: CollectionConfig = {
  slug: "tenants",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: ({ req }) => {
      const tenant = getTenant({ req });
      return {
        _id: {
          equals: tenant,
        },
      };
    },
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
  timestamps: false,
};

export default Tenants;
