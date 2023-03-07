export const addTenant = ({ req, operation, data }) => {
  if (operation === "create") {
    if (req.user) {
      data.tenant = req.user.tenant.id;
      return data;
    }
  }
};

export const addTenantAndCreatedBy = ({ req, operation, data }) => {
  if (operation === "create") {
    if (req.user) {
      data.createdBy = req.user.id;
      data.tenant = req.user.tenant.id;
      return data;
    }
  }
};
