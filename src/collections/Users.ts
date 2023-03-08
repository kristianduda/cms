import { CollectionConfig } from "payload/types";
import { tenant } from "../fields/tenantField";
import { checkTenant, isAdmin } from "../utils/accessUtils";
import { addTenant } from "../utils/hooksUtils";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
      required: true,
      defaultValue: "user",
    },
    tenant,
  ],
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

export default Users;
