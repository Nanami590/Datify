/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable guard-for-in */

import { Key } from "react";

export const deepEqual = (a: unknown, b: unknown) => {
  if (a === b) return true;

  if (a == null || typeof a !== "object" || b == null || typeof b !== "object")
    return false;

  let propertiesInA = 0;
  let propertiesInB = 0;

  for (const property in a) {
    propertiesInA += 1;
  }

  for (const property in b) {
    propertiesInB += 1;
    if (
      !(property in a) ||
      !deepEqual(a[property as keyof Key], b[property as keyof Key])
    )
      return false;
  }

  return propertiesInA === propertiesInB;
};
