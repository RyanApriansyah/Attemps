import React from "react";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import { Calendar } from "@/Components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

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
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
        <div className="w-full h-screen pt-10 ">
            <Navbar></Navbar>
            <div className="hero-text w-[70%] mx-auto mt-24 ">
                <p className="text-white text-[70px] font-hero  font-thin text-center font-bold mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error, velit.
                </p>
                <p className="text-white text-[70px] font-hero  font-thin text-center font-bold mb-4">
                    Push Bagas 
                </p>
            </div>
            <Switch></Switch>
            <Alert variant="default">
                <AlertTitle>anda bukan admin !</AlertTitle>
                <AlertDescription>silahkan cek kembali</AlertDescription>
            </Alert>
            <AlertDialog>
                <AlertDialogTrigger>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Button>Click Me</Button>
            <Calendar  mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border">
                
            </Calendar>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
            ></Calendar>
            <Card>
                <CardHeader>
                    <CardTitle>Putra</CardTitle>
                    <CardDescription>
                        Putra Anwar Fadilah Ganteng
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-xl text-blue-400">
                    <p>Putra</p>
                </CardContent>
                <CardFooter>
                    <p>Putra</p>
                </CardFooter>
                <Button>Klik aku</Button>
                <Switch></Switch>
            </Card>
            <Badge variant="secondary" className="hover:bg-red-300">Tetsss</Badge>
            <Badge variant="secondary" className="hover:bg-red-300">
                Tetsss
            </Badge>

            <h1>Halooooooo saya ryannn gantenggggggggggggggggg</h1>
            <h1>TESTT BARU</h1>
            <h1>Ryan Love sisi semoga nikah tahun 2045</h1>
        </div>
    );
}
