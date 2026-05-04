"use client";

import React from "react";
import {
  Button,
  Input,
  Select,
  TextArea,
  Card,
  CardContent,
  ListBox,
  Label,
  TextField,
} from "@heroui/react";
import { ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddCollaboratorPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin/collaborators");
  };

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Button
          isIconOnly
          variant="secondary"
          onPress={() => router.push("/admin/collaborators")}
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-bold">Add New Collaborator</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField>
                <Label>Full Name</Label>
                <Input required placeholder="John Doe" />
              </TextField>
              <TextField>
                <Label>Email</Label>
                <Input required placeholder="john@example.com" type="email" />
              </TextField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select placeholder="Select a role">
                <Label>Role</Label>
                <Select.Trigger />
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="admin" textValue="Admin">
                      Admin
                    </ListBox.Item>
                    <ListBox.Item id="editor" textValue="Editor">
                      Editor
                    </ListBox.Item>
                    <ListBox.Item id="viewer" textValue="Viewer">
                      Viewer
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              <Select placeholder="Select a team">
                <Label>Team</Label>
                <Select.Trigger />
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="management" textValue="Management">
                      Management
                    </ListBox.Item>
                    <ListBox.Item id="development" textValue="Development">
                      Development
                    </ListBox.Item>
                    <ListBox.Item id="marketing" textValue="Marketing">
                      Marketing
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField>
              <Label>Bio</Label>
              <TextArea placeholder="Tell us about the collaborator" />
            </TextField>

            <div className="flex justify-end gap-2">
              <Button
                variant="secondary"
                onPress={() => router.push("/admin/collaborators")}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                <Save size={18} />
                Save Collaborator
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
