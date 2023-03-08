import { Field } from "payload/types";

export const tenant: Field = {
  name: "tenant",
  type: "relationship",
  relationTo: "tenants",
  access: {
    update: () => false,
  },
  admin: {
    hidden: true,
  },
};
