import MenubarComponent from "@/components/menu"
import EmptyComponent from "@/components/empty";
import FeatureModal from "@/components/modal/feature-modal";
import UnsavedModal from "@/components/modal/unsaved-modal";
import ThemeProvider from "@/components/theme-provider";

export function App() {
    return <>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <MenubarComponent />
            <FeatureModal />
            <UnsavedModal />
            <EmptyComponent />
        </ThemeProvider>
    </>
}

export default App;