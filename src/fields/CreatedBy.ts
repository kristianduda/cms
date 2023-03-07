import { Field } from "payload/types";

export const CreatedBy: Field = {
  name: "createdBy",
  type: "relationship",
  relationTo: "users",
  access: {
    update: () => false,
  },
  admin: {
    readOnly: true,
    position: "sidebar",
    condition: (data) => Boolean(data?.createdBy),
  },
};
