"use client";

import {
  Tabs,
  Card,
  CardContent,
  TextField,
  Label,
  Input,
  Button,
  Switch,
} from "@heroui/react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-default-500">
          Manage your account and application preferences.
        </p>
      </div>

      <Tabs aria-label="Settings Options" variant="primary">
        <Tabs.List>
          <Tabs.Tab id="profile">Profile</Tabs.Tab>
          <Tabs.Tab id="notifications">Notifications</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="profile">
          <Card className="border-none bg-background/60 dark:bg-default-100/50 mt-4">
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField>
                  <Label>Full Name</Label>
                  <Input defaultValue="Admin User" />
                </TextField>
                <TextField>
                  <Label>Email Address</Label>
                  <Input defaultValue="admin@example.com" />
                </TextField>
              </div>
              <Button variant="primary">Save Changes</Button>
            </CardContent>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="notifications">
          <Card className="border-none bg-background/60 dark:bg-default-100/50 mt-4">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-small text-default-500">
                    Receive weekly activity reports.
                  </p>
                </div>
                <Switch defaultSelected />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Security Alerts</p>
                  <p className="text-small text-default-500">
                    Get notified of suspicious login attempts.
                  </p>
                </div>
                <Switch defaultSelected />
              </div>
            </CardContent>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
