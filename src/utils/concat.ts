/*
  types can be inferred properly in conjunction with javascript's
  typeof method
*/
export const concat = (value: number | string) => {
  if (typeof value === "string") {
    return `Hello ${value}`;
  }

  return 5 + value;
};

/*
  you can manually change change the argument value as long as
  it satisfies what comes after `extends`
*/
export const concatGeneric = <T extends number | string>(value: T) => {
  if (typeof value === "string") {
    return `Hello ${value}`;
  }

  return 5 + (value as number);
};
