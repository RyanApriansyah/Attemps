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
  } from "@/Components/ui/card"

import Navbar from "@/Components/Navbar";

export default function Home() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className="w-full h-screen pt-10 bg-[#202020]">
            <Navbar></Navbar>
            <div className="hero-text w-[70%] mx-auto mt-24 ">
                <p className="text-white text-[70px] font-hero  font-thin text-center font-bold mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error, velit.
                </p>
            </div>
            <Switch></Switch>
            <Button>Click Me</Button>
            <Calendar  mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border">
                
            </Calendar>
            <Card>
                <CardHeader>
                <CardTitle>Putra</CardTitle>
                <CardDescription>Putra Anwar Fadilah Ganteng</CardDescription>
                </CardHeader>
                <CardContent className="text-xl text-blue-400"><p>Putra</p></CardContent>
                <CardFooter><p>Putra</p></CardFooter>
                <Button>Klik aku</Button>
                <Switch></Switch>
            </Card>
        </div>
    );
}
