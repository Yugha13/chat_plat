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
              <Label htmlFor="email">Username</Label>
              <Input
              id="gmail"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter Your Username"
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
            <Button>Login</Button>
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
              <Label htmlFor="current">Email</Label>
              <Input 
              id="current" 
              type="email"
              required
              placeholder="Enter your Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input
                id="new"
                type="password"
                placeholder="Enter the Password"
                />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Confirm Password</Label>
              <Input
                id="new"
                type="password"
                placeholder="Confirm the Password"
                />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </>
  )
}