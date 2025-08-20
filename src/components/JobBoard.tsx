import { Table } from "@mantine/core";
import type { JobPosition } from "./types";
import { formatExperience, formatLength } from "./utils";

const data: JobPosition[] = [
  {
    id: "1",
    company: "Software House AI",
    positionName: "Design Frontend Engineer",
    publishedAt: new Date("2025-03-13"),
    location: ["US"],
    skills: ["Frontend Architecture"],
    experience: [5],
    employmentType: "fulltime",
    applicationStatus: "not-applied",
    category: "frontend",
  },
  {
    id: "2",
    company: "Software House AI",
    positionName: "Frontend Engineer",
    publishedAt: new Date("2025-03-14"),
    location: ["US", "CA"],
    skills: ["React", "Next.js"],
    experience: [5, 15],
    employmentType: "fulltime",
    applicationStatus: "not-applied",
    category: "frontend",
  },
  {
    id: "7",
    company: "Software House AI",
    positionName: "Frontend Engineer",
    publishedAt: new Date("2025-03-14"),
    location: ["US", "CA"],
    skills: ["React", "Javascript", "Next.js"],
    experience: [undefined, 15],
    length: 1,
    employmentType: "contract",
    applicationStatus: "not-applied",
    category: "frontend",
  },
  {
    id: "3",
    company: "Image Processing LLC",
    positionName: "Frontend Developer",
    publishedAt: new Date("2025-03-15"),
    location: [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IE",
      "IT",
      // "LV",
      // "LT",
      // "LU",
      // "MT",
      // "NL",
      // "PL",
      // "PT",
      // "RO",
      // "SK",
      // "SI",
      // "ES",
      // "SE",
      // "GB",
      // "AR",
      // "BO",
      // "BR",
      // "CL",
      // "CO",
      // "CR",
      // "CU",
      // "DO",
      // "EC",
      // "SV",
      // "GT",
      // "HT",
      // "HN",
      // "MX",
      // "NI",
      // "PA",
      // "PY",
      // "PE",
      // "PR",
      // "UY",
      // "VE",
    ],
    skills: ["React"],
    experience: [8, 15],
    length: 2,
    employmentType: "fulltime",
    applicationStatus: "not-applied",
    category: "frontend",
  },
  {
    id: "4",
    company: "Wizard Labs",
    positionName: "Data Engineer (Web Scraping)",
    publishedAt: new Date("2025-03-03"),
    location: ["ALL"],
    skills: ["Python", "Data Visualization"],
    experience: [5, 8],
    employmentType: "fulltime",
    applicationStatus: "not-applied",
    category: "data analyst",
  },
  {
    id: "5",
    company: "Heart Health",
    positionName: "Senior Full Stack Engineer",
    publishedAt: new Date("2024-10-29"),
    location: ["US"],
    skills: ["React", "UI Development"],
    employmentType: "fulltime",
    applicationStatus: "not-applied",
    category: "fullstack",
  },
  {
    id: "6",
    company: "Jeans",
    positionName: "Software Engineer",
    publishedAt: new Date("2024-11-01"),
    location: [
      "AR",
      "BO",
      "BR",
      "CL",
      "CO",
      "CR",
      "CU",
      "DO",
      "EC",
      "SV",
      "GT",
      "HT",
      "HN",
      "MX",
      "NI",
      "PA",
      "PY",
      "PE",
      "PR",
      "UY",
      "VE",
    ],
    skills: ["React", "Elixir"],
    experience: [3, 5],
    length: 6,
    employmentType: "contract",
    applicationStatus: "not-applied",
    category: "fullstack",
  },
];

const localeDateOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
};

export function JobBoard() {
  const rows = data.map((element) => (
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
      <Table striped highlightOnHover verticalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company - Position</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Published At</Table.Th>
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
