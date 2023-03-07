import { CollectionConfig } from "payload/types";

const Tenants: CollectionConfig = {
  slug: "tenants",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        return {
          _id: {
            equals: user.tenant.id,
          },
        };
      }

      return false;
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
