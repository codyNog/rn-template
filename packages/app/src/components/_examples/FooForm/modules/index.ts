import type { FooFormValues } from "../types";

// fix this to convert form values to create params
const toCreateParams = (values: FooFormValues) => {
  return { ...values };
};

// fix this to convert form values to update params
const toUpdateParams = (values: FooFormValues) => {
  return {
    ...values,
  };
};

export const FooFormModules = {
  toCreateParams,
  toUpdateParams,
};
