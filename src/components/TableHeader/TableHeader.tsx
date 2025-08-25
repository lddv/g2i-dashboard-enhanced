import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from "@tabler/icons-react";
import classes from "./TableHeader.module.css";
import { Group, Table, UnstyledButton, Text, Center } from "@mantine/core";

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort: () => void;
}

export function TableHeader({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;

  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={700} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={16} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}
