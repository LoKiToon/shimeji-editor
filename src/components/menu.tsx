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

export default function MenubarComponent() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarGroup>
                        <MenubarSub>
                            <MenubarSubTrigger>New..</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarGroup>
                                    <MenubarItem>From Template</MenubarItem>
                                    <MenubarItem>Blank Project</MenubarItem>
                                </MenubarGroup>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarGroup>
                    <MenubarItem>
                    Open <MenubarShortcut>⌘+O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                    Save <MenubarShortcut>⌘+S</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem>
                    Import Shimeji
                    </MenubarItem>
                    <MenubarItem>
                    Export Shimeji
                    </MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarItem>
                    Undo <MenubarShortcut>⌘+Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                    Redo <MenubarShortcut>⇧+⌘+Z</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarItem>Shimeji Feature Set <MenubarShortcut>⌘+L</MenubarShortcut></MenubarItem>
                    <MenubarItem>Preferences <MenubarShortcut>⌘+,</MenubarShortcut></MenubarItem>
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