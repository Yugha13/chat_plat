import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export function Login() {
  const [isDoc, setisDoc] = useState<boolean>(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async () => {
  }

  return (
    <>
    <div className="grid w-screen place-items-center h-screen">
    <Tabs defaultValue="account" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2 mb-10">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              To Chat With Your Friends 1000+
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
              id="gmail"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter Your Gmail"
              defaultValue="example@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="pass">Password</Label>
              <Input
               type="password"
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               placeholder="Enter Your Password"
               id="pass" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2 justify-center">
            </div>
            <Button>
                Login
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Now to spend the time with your Love.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input
                id="new"
                type="password"
                />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </>
  )
}