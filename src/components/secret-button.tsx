"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Suspense, useState, lazy } from "react";
import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
const SecretTable = lazy(() => import("@/components/secret-table"));

const SecretButton = () => {
  const [password, setPassword] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    // ToDo: Optimize api
    const response = await fetch("api/check-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    }).then((res) => res.json());
    if (response.message === "ok") {
      toast.success("You can see the secret!");
      setShowSecret(true);
    } else {
      toast.error("You can't see the secret!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-none text-3xl font-semibold"
        >
          cypress
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Secret</DialogTitle>
        </DialogHeader>
        {showSecret ? (
          <Suspense fallback={<div>Loading...</div>}>
            <SecretTable />
          </Suspense>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                defaultValue=""
                onChange={handleInput}
                className="col-span-3"
              />
            </div>
          </div>
        )}
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className={`${showSecret ? "hidden" : ""}`}
          >
            See
          </Button>
          <Toaster />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default SecretButton;
