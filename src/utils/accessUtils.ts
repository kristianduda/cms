import { isObject } from "./objectUtils";

export const isAdminOrCreatedBy = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === "admin") {
    return true;
  }

  // Scenario #2 - Allow only documents with the current user set to the 'createdBy' field
  if (user) {
    // Will return access for only documents that were created by the current user
    return {
      createdBy: {
        equals: user.id,
      },
    };
  }

  // Scenario #3 - Disallow all others
  return false;
};

export const isAdmin = ({ req: { user } }) => {
  if (user && user.role === "admin") {
    return true;
  }

  return false;
};

export const getTenant = ({ req: { user, headers } }) => {
  if (user) {
    return isObject(user.tenant) ? user.tenant.id : user.tenant;
  } else {
    return headers["x-api-key"];
  }
};

export const checkTenant = ({ req }) => {
  const tenant = getTenant({ req });
  return {
    tenant: {
      equals: tenant,
    },
  };
};
