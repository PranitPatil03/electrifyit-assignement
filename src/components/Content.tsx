import {
  ArrowBigDownDashIcon,
  ArrowDown,
  BellIcon,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Content = () => {
  return (
    <div className="flex flex-col text-white mx-6 my-5 px-4 py-2 w-full h-screen">
      <div className="flex gap-4 w-full justify-between items-center">
        <h1 className="text-2xl font-mono ">Reports</h1>

        <div className="flex gap-4 items-center">
          <BellIcon></BellIcon>
          <div className="mr-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-3 items-center px-2 py-1 rounded-xl outline-none">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="w-full h-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-base font-semibold flex flex-row gap-2">
                    Username{" "}
                    <span>
                      <ChevronDown className="text-sm"></ChevronDown>
                    </span>
                  </p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="mr-8 mt-7">
        <hr className="border-slate-500" />
        <div className="flex flex-row gap-4 mt-2">
          <div className="border-r">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-20">
                  <p className="">Reports</p>
                  <ChevronDown className="text-sm mr-6"></ChevronDown>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="border-r">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-20">
                  <p className="">Frequency</p>
                  <ChevronDown className="text-sm mr-6"></ChevronDown>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mr-6 border-r">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-20">
                  <p className="">Time Frame</p>
                  <ChevronDown className="text-sm mr-6"></ChevronDown>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <hr className="border-slate-500 mt-2" />
      </div>
    </div>
  );
};

export default Content;
