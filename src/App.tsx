import { MenubarComponent } from "@/components/menu"
import { EmptyComponent } from "@/components/empty";
import { FeatureModal } from "@/components/modal/feature-modal";

export function App() {
    return <div>
        <MenubarComponent />
        <FeatureModal />
        <EmptyComponent />;
    </div>
}

export default App;