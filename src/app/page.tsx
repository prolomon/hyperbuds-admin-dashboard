/* eslint-disable no-console */
"use client";

import React from "react";
import {
  Button,
  Checkbox,
  Link,
  Card,
  CardContent,
  CardHeader,
  TextField,
  InputGroup,
  Label,
} from "@heroui/react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/admin/dashboard");

    const res = await fetch(`https://api-hyperbuds-backend.onrender.com/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <Card className="w-full max-w-[420px] p-6 rounded-xl shadow-md">
        <CardHeader className="flex flex-col gap-2 items-center justify-center pb-6">
          <div className="flex flex-col items-center mb-1">
            <div className="rounded-md overflow-hidden">
              <Image
                alt="Hyperbuds logo"
                height={100}
                src="/logo.png"
                width={100}
              />
            </div>
            <h1 className="text-2xl font-extrabold">Hyperbuds</h1>
          </div>
          <p className="text-sm text-default-500">Administrator Portal</p>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <TextField>
              <Label>Email Address</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <Mail
                    className="text-default-400 pointer-events-none flex-shrink-0"
                    size={16}
                  />
                </InputGroup.Prefix>
                <InputGroup.Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </InputGroup>
            </TextField>

            <TextField type={isVisible ? "text" : "password"}>
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <Lock
                    className="text-default-400 pointer-events-none flex-shrink-0"
                    size={16}
                  />
                </InputGroup.Prefix>
                <InputGroup.Input
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
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
            <Button fullWidth className="bg-purple-800" size="lg" type="submit">
              Log In
            </Button>
          </form>
        </CardContent>
        <footer className="mt-8 text-center text-tiny text-default-400">
          © 2026 Hyperbuds. All rights reserved.
        </footer>
      </Card>
    </div>
  );
}
