import { CollectionConfig } from "payload/types";
import { CreatedBy } from "../fields/CreatedBy";
import { Tenant } from "../fields/Tenant";
import { checkTenant, isAdminOrCreatedBy } from "../utils/accessUtils";
import { addTenantAndCreatedBy } from "../utils/hooksUtils";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    defaultColumns: ["title", "author", "category", "tags", "status"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "content",
      type: "richText",
    },
    Tenant,
    CreatedBy,
  ],
  access: {
    read: checkTenant,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy,
    create: isAdminOrCreatedBy,
  },
  hooks: {
    beforeChange: [addTenantAndCreatedBy],
  },
};

export default Posts;
