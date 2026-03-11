import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from "@/components/ui/menubar"

import {
    IconArrowBack,
    IconArrowBackUp,
    IconClipboard,
    IconCopy,
    IconCut,
    IconDeviceFloppy,
    IconDownload,
    IconFilePlus,
    IconFileSettings,
    IconFolder,
    IconSettings,
    IconUpload
} from "@tabler/icons-react"

export default function MenubarComponent() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarGroup>
                        <MenubarSub>
                            <MenubarSubTrigger><IconFilePlus /> New..</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarGroup>
                                    <MenubarItem>From Template</MenubarItem>
                                    <MenubarItem>Blank Project</MenubarItem>
                                </MenubarGroup>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarGroup>
                    <MenubarItem>
                    <IconFolder /> Open <MenubarShortcut>⌘+O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                    <IconDeviceFloppy /> Save <MenubarShortcut>⌘+S</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem>
                    <IconDownload /> Import Shimeji
                    </MenubarItem>
                    <MenubarItem>
                    <IconUpload /> Export Shimeji
                    </MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarItem>
                    <IconArrowBackUp /> Undo <MenubarShortcut>⌘+Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                    <IconArrowBack /> Redo <MenubarShortcut>⇧+⌘+Z</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem><IconCut /> Cut</MenubarItem>
                    <MenubarItem><IconCopy /> Copy</MenubarItem>
                    <MenubarItem><IconClipboard /> Paste</MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarItem><IconFileSettings /> Shimeji Feature Set <MenubarShortcut>⌘+L</MenubarShortcut></MenubarItem>
                    <MenubarItem><IconSettings /> Preferences <MenubarShortcut>⌘+,</MenubarShortcut></MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>About</MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}