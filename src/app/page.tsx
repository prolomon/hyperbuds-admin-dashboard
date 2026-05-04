"use client";

import React from "react";
import {
  Button,
  Checkbox,
  Link,
  Separator,
  Card,
  CardContent,
  CardHeader,
  TextField,
  InputGroup,
  Label,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <Card className="w-full max-w-[400px] p-4">
        <CardHeader className="flex flex-col gap-1 items-center justify-center pb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-primary p-2 rounded-lg">
              <Lock className="text-primary-foreground" size={24} />
            </div>
            <h1 className="text-2xl font-bold">Unified Portal</h1>
          </div>
          <p className="text-small text-default-500">
            Revenue Management System
          </p>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <TextField>
              <Label>Email Address</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <Mail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                </InputGroup.Prefix>
                <InputGroup.Input placeholder="Enter your email" />
              </InputGroup>
            </TextField>

            <TextField type={isVisible ? "text" : "password"}>
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <Lock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                </InputGroup.Prefix>
                <InputGroup.Input placeholder="Enter your password" />
                <InputGroup.Suffix>
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeOff className="text-xl text-default-400 pointer-events-none" />
                    ) : (
                      <Eye className="text-xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>

            <div className="flex py-2 px-1 justify-between items-center">
              <Checkbox>Remember me</Checkbox>
              <Link href="#">Forgot password?</Link>
            </div>
            <Button fullWidth size="lg" type="submit">
              Log In
            </Button>
          </form>

          <div className="flex items-center gap-4 py-4">
            <Separator className="flex-1" />
            <p className="text-tiny text-default-400">OR</p>
            <Separator className="flex-1" />
          </div>

          <div className="flex flex-col gap-2">
            <Button fullWidth variant="secondary">
              <Icon icon="flat-color-icons:google" width={24} />
              Continue with Google
            </Button>
          </div>

          <p className="text-center text-small mt-6">
            Need to create an account? <Link href="#">Sign Up</Link>
          </p>
        </CardContent>
        <footer className="mt-8 text-center text-tiny text-default-400">
          © 2026 TR3G. All rights reserved.
        </footer>
      </Card>
    </div>
  );
}
