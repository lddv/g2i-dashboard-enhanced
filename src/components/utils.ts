import type { JobPosition } from "./types";

export function formatExperience(
  experience: JobPosition["experience"],
): string {
  if (!experience || experience.length === 0) return "";

  if (
    experience.length === 1 ||
    (experience.length === 2 &&
      experience[0] !== undefined &&
      experience[1] === undefined)
  )
    return `${experience[0]}+ Yrs`;

  if (experience[0] === undefined && experience[1] !== undefined)
    return `Max ${experience[1]} Yrs`;

  return `${experience[0]} - ${experience[1]} Yrs`;
}

export function formatLength(length: JobPosition["length"]): string {
  if (!length) return "";
  return `${length} month${length > 1 ? "s" : ""}`;
}
