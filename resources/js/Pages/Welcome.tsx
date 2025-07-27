import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Badge } from "@/Components/ui/badge";
import Navbar from "@/Components/Navbar";

export default function Home() {
    return (
        <div className="w-full h-screen pt-10 ">
            <Navbar></Navbar>
            <div className="hero-text w-[70%] mx-auto mt-24 ">
                <p className="text-white text-[70px] font-hero  font-thin text-center font-bold mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error, velit.
                </p>
            </div>
            <Switch></Switch>
            <Alert variant="default">
                <AlertTitle>
                    anda bukan admin !
                </AlertTitle>
                <AlertDescription>
                    silahkan cek kembali 
                </AlertDescription>
            </Alert>
            <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
            <Button>Click Me</Button>
            <Badge variant="secondary" className="hover:bg-red-300">Tetsss</Badge>
        </div>
    );
}
