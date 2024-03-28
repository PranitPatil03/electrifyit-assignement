import Content from "@/components/Content"
import SideBar from "@/components/SideBar"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const DashBoard = () => {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] w-full rounded-lg border h-screen"
        >
            <ResizablePanel defaultSize={16}>
                <SideBar></SideBar>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel >
                <Content></Content>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

export default DashBoard