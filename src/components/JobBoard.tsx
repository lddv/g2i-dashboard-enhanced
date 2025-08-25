import { Table } from "@mantine/core";
import { useState } from "react";

import { data, localeDateOptions } from "./constants";
import { formatExperience, formatLength, sortData } from "./utils";
import type { JobPosition } from "./types";

import { SortableTableHeader } from "./TableHeader/SortableTableHeader";

export function JobBoard() {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof JobPosition | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof JobPosition) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed }));
  };

  const showRateColumn = data.some((job) => job.rate);

  const rows = sortedData.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <b>{element.company}</b> - {element.positionName}
      </Table.Td>
      <Table.Td>{element.category}</Table.Td>
      <Table.Td>
        {element.publishedAt.toLocaleDateString(undefined, localeDateOptions)}
      </Table.Td>
      <Table.Td>{element.location.toString()}</Table.Td>
      <Table.Td>{element.skills.toString()}</Table.Td>
      <Table.Td>{formatExperience(element.experience)}</Table.Td>
      {showRateColumn ? <Table.Td>{element.rate}</Table.Td> : null}
      <Table.Td>{formatLength(element.length)}</Table.Td>
      <Table.Td>{element.employmentType}</Table.Td>
      <Table.Td>{element.applicationStatus}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div>
        <h2>All Roles</h2>
        <span>
          Showing <b>{data.length}</b> results
        </span>
      </div>
      <Table stickyHeader striped highlightOnHover verticalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company - Position</Table.Th>
            <SortableTableHeader
              sorted={sortBy === "category"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("category")}
            >
              Category
            </SortableTableHeader>
            <SortableTableHeader
              sorted={sortBy === "publishedAt"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("publishedAt")}
            >
              Published At
            </SortableTableHeader>
            <Table.Th>Location</Table.Th>
            <Table.Th>Skills</Table.Th>
            <Table.Th>Experience</Table.Th>
            {showRateColumn ? <Table.Th>Rate</Table.Th> : null}
            <Table.Th>Length</Table.Th>
            <SortableTableHeader
              sorted={sortBy === "employmentType"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("employmentType")}
            >
              Type
            </SortableTableHeader>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
