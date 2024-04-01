import {
  ArrowBigDownDashIcon,
  ArrowDown,
  BellIcon,
  CalendarIcon,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";

const Content = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
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
              <DropdownMenuContent className="w-[175px] bg-[#1D1D26] border-none text-white mt-2">
                <DropdownMenuItem className="cursor-pointer">
                  Total Miles Driven
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Energy Consumption
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Cost Analysis
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="border-r">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-20">
                  <p className="">Reports</p>
                  <ChevronDown className="text-sm mr-6"></ChevronDown>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[175px] bg-[#1D1D26] border-none text-white mt-2">
                <DropdownMenuItem className="cursor-pointer">
                  Daily
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Weekly
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Monthly
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Yearly
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mr-6 border-r">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-20">
                  <p className="">Reports</p>
                  <ChevronDown className="text-sm mr-6"></ChevronDown>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[175px] bg-[#1D1D26] border-none text-white mt-2">
                <div className={cn("grid gap-2", className)}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
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
