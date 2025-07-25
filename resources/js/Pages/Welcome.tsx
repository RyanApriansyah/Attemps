import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import Navbar from "@/Components/Navbar";

export default function Home() {
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
        </div>
    );
}
