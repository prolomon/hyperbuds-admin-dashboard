"use client";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  Avatar,
  Chip,
  Separator,
} from "@heroui/react";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
// import EditCollaboratorForm from "@/components/admin/EditCollaboratorForm";

export default function CollaboratorDetailsPage() {
  const router = useRouter();

  // In a real app, you would fetch data based on ID
  const user = {
    id: "1",
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "tony.reichert@example.com",
    phone: "+1 (555) 000-0000",
    location: "San Francisco, CA",
    joined: "January 20, 2022",
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2">
        <Button
          isIconOnly
          variant="secondary"
          onPress={() => router.push("/admin/collaborators")}
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-bold">Collaborator Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardContent className="flex flex-col items-center py-8 gap-4">
            <Avatar className="w-32 h-32 text-large">
              <Avatar.Image src={user.avatar} />
            </Avatar>
            <div className="text-center">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-default-500">{user.role}</p>
            </div>
            <Chip variant="soft">{user.status}</Chip>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardContent className="p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-default-100 p-2 rounded-lg text-default-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-tiny text-default-500">Email Address</p>
                    <p className="text-small font-medium">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-default-100 p-2 rounded-lg text-default-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-tiny text-default-500">Phone Number</p>
                    <p className="text-small font-medium">{user.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-default-100 p-2 rounded-lg text-default-600">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-tiny text-default-500">Location</p>
                    <p className="text-small font-medium">{user.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-default-100 p-2 rounded-lg text-default-600">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-tiny text-default-500">Joined Date</p>
                    <p className="text-small font-medium">{user.joined}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-default-100 p-2 rounded-lg text-default-600">
                    <Shield size={18} />
                  </div>
                  <div>
                    <p className="text-tiny text-default-500">Team</p>
                    <p className="text-small font-medium">{user.team}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Edit Collaborator</h4>
                {/* <EditCollaboratorForm initialUser={user} id={id} /> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
