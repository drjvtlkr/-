import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="your@email.com"
          type="email"
          name="email"
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="***********"
          type="password"
          name="password"
        />

        <Button className="">Login &rarr;</Button>
      </form>
    </div>
  );
};

export default Login;
