"use client";

import React from "react";
import {
  Table,
  Button,
  Chip,
  Avatar,
  TextField,
  InputGroup,
} from "@heroui/react";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
];

export default function CollaboratorsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end gap-3">
        <TextField className="w-full sm:max-w-[44%]">
          <InputGroup>
            <InputGroup.Prefix>
              <Search className="text-default-400" size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder="Search by name..." />
          </InputGroup>
        </TextField>
        <div className="flex gap-3">
          <Button
            variant="primary"
            onPress={() => router.push("/admin/collaborators/add-collaborator")}
          >
            <Plus />
            Add New
          </Button>
        </div>
      </div>

      <Table aria-label="Collaborators table">
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              {columns.map((column) => (
                <Table.Column key={column.uid} id={column.uid}>
                  {column.name}
                </Table.Column>
              ))}
            </Table.Header>
            <Table.Body>
              {users.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image src={item.avatar} />
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-small font-medium">
                          {item.name}
                        </span>
                        <span className="text-tiny text-default-400">
                          {item.email}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-col">
                      <p className="text-bold text-small capitalize">
                        {item.role}
                      </p>
                      <p className="text-bold text-tiny capitalize text-default-400">
                        {item.team}
                      </p>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Chip
                      color={statusColorMap[item.status]}
                      size="sm"
                      variant="soft"
                    >
                      {item.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="relative flex justify-end items-center gap-2">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="ghost"
                        onPress={() =>
                          router.push(`/admin/collaborators/${item.id}`)
                        }
                      >
                        <Eye className="text-default-400" size={16} />
                      </Button>
                      <Button isIconOnly size="sm" variant="ghost">
                        <Edit className="text-default-400" size={16} />
                      </Button>
                      <Button isIconOnly size="sm" variant="ghost">
                        <Trash2 className="text-danger" size={16} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
