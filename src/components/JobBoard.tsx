import { Table } from "@mantine/core";
import { useState } from "react";

import { data, localeDateOptions } from "./constants";
import { formatExperience, formatLength, sortData } from "./utils";
import type { JobPosition } from "./types";

import { TableHeader } from "./TableHeader/TableHeader";

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
      <Table.Td>{element.rate}</Table.Td>
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
            <Table.Th>Category</Table.Th>
            <TableHeader
              sorted={sortBy === "publishedAt"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("publishedAt")}
            >
              Published At
            </TableHeader>
            <Table.Th>Location</Table.Th>
            <Table.Th>Skills</Table.Th>
            <Table.Th>Experience</Table.Th>
            <Table.Th>Rate</Table.Th>
            <Table.Th>Length</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
