"use client";

import {
  Card,
  CardContent,
  Accordion,
  TextField,
  Label,
  TextArea,
  Button,
  Input,
} from "@heroui/react";
import { Mail, MessageCircle } from "lucide-react";

export default function HelpSupportPage() {
  const faqs = [
    {
      q: "How do I add a new collaborator?",
      a: "Navigate to Collaborators > Add New in the sidebar and fill out the form.",
    },
    {
      q: "Can I change the theme?",
      a: "Yes, use the theme switcher at the bottom of the sidebar to toggle between light and dark mode.",
    },
    {
      q: "How are logs retained?",
      a: "System logs are kept for 30 days by default.",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-default-500">
          Find answers or get in touch with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion variant="surface">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i}>
                <Accordion.Heading>
                  <Accordion.Trigger>{faq.q}</Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>{faq.a}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div className="space-y-6">
          <Card className="border-none bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MessageCircle size={20} />
                Need more help?
              </h3>
              <p className="text-small mt-2 opacity-90">
                Our support team is available 24/7 to assist you with any
                issues.
              </p>
              <Button
                className="mt-4 w-full bg-white text-primary hover:bg-default-100"
                variant="ghost"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none bg-background/60 dark:bg-default-100/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Mail size={20} />
                Send us a message
              </h3>
              <div className="space-y-4">
                <TextField>
                  <Label>Subject</Label>
                  <Input placeholder="How can we help?" />
                </TextField>
                <TextField>
                  <Label>Message</Label>
                  <TextArea placeholder="Describe your issue..." />
                </TextField>
                <Button className="w-full" variant="primary">
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
