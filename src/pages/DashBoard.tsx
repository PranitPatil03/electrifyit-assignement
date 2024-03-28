import Content from "@/components/Content";
import SideBar from "@/components/SideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const DashBoard = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-screen">
      <ResizablePanel
        defaultSize={12}
        minSize={12}
        maxSize={12}
        className="bg-[#1D1D26]"
      >
        <SideBar></SideBar>
      </ResizablePanel>
      <ResizableHandle className="border-l border-[#040609]" />
      <ResizablePanel className="bg-[#040609]">
        <Content></Content>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default DashBoard;
