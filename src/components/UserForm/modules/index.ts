import type { UserFormValues } from "../types";

// fix this to convert form values to create params
const toCreateParams = (values: UserFormValues) => {
  return { ...values };
};

// fix this to convert form values to update params
const toUpdateParams = (values: UserFormValues) => {
  return {
    ...values,
  };
};

export const UserFormModules = {
  toCreateParams,
  toUpdateParams,
};
