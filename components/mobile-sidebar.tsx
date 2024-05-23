import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSideBar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4"> 
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-18 w-32">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSideBar;
