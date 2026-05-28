"use client";

import { Table, Card, CardContent, Badge } from "@heroui/react";

export default function LogPage() {
  const logs = [
    {
      id: 1,
      action: "User Login",
      user: "admin@example.com",
      status: "success",
      time: "2 mins ago",
    },
    {
      id: 2,
      action: "Update Settings",
      user: "jane.doe@example.com",
      status: "warning",
      time: "1 hour ago",
    },
    {
      id: 3,
      action: "Delete Collaborator",
      user: "admin@example.com",
      status: "danger",
      time: "3 hours ago",
    },
    {
      id: 4,
      action: "System Backup",
      user: "System",
      status: "success",
      time: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">System Logs</h1>
        <p className="text-default-500">
          Monitor all system activities and security events.
        </p>
      </div>

      <Card className="border-none bg-background/60 dark:bg-default-100/50">
        <CardContent className="p-0">
          <Table aria-label="System Logs Table" variant="secondary">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header>
                  <Table.Column id="action">ACTION</Table.Column>
                  <Table.Column id="user">USER</Table.Column>
                  <Table.Column id="status">STATUS</Table.Column>
                  <Table.Column id="time">TIME</Table.Column>
                </Table.Header>
                <Table.Body items={logs}>
                  {(log) => (
                    <Table.Row key={log.id}>
                      <Table.Cell className="font-medium">
                        {log.action}
                      </Table.Cell>
                      <Table.Cell>{log.user}</Table.Cell>
                      <Table.Cell>
                        <Badge color={log.status as any} variant="soft">
                          {log.status}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell className="text-default-400 text-small">
                        {log.time}
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
