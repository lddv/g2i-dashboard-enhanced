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

// function filterData(data: JobPosition[], search: string) {
//   const query = search.toLowerCase().trim();
//   return data.filter((item) =>
//     Object.keys(data[0]).some((key) => item[key].toLowerCase().includes(query)),
//   );
// }

function isDate(object: unknown): object is Date {
  return object instanceof Date && !isNaN(object.getTime());
}

export function sortData(
  data: JobPosition[],
  payload: {
    sortBy: keyof JobPosition | null;
    reversed: boolean;
    // search: string;
  },
) {
  const { sortBy } = payload;

  if (!sortBy) {
    // return filterData(data, payload.search);
    return data;
  }

  return [...data].sort((a, b) => {
    if (isDate(a[sortBy]) && isDate(b[sortBy])) {
      if (payload.reversed) {
        return (a[sortBy] as number) - (b[sortBy] as number);
      }

      return (b[sortBy] as number) - (a[sortBy] as number);
    }

    // string
    if (payload.reversed) {
      return (b[sortBy]?.toLocaleString() as string).localeCompare(
        a[sortBy]?.toLocaleString() as string,
      );
    }

    return (a[sortBy]?.toLocaleString() as string).localeCompare(
      b[sortBy]?.toLocaleString() as string,
    );
  });

  // return filterData(
  //   [...data].sort((a, b) => {
  //     if (payload.reversed) {
  //       return b[sortBy]!.localeCompare(a[sortBy]);
  //     }

  //     return a[sortBy].localeCompare(b[sortBy]);
  //   }),
  //   payload.search,
  // );
}
