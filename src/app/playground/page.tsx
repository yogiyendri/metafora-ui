import { AvatarInitials } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as React from "react";

export default function Playground() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-normal">ExampleUI</h1>
        <div className="flex items-center gap-2 mt-6">
          <Label>Label</Label>
          <Label size={"lg"}>Label</Label>
          <AvatarInitials>AV</AvatarInitials>
          <Button>Button</Button>
        </div>
      </main>
    </>
  );
}
