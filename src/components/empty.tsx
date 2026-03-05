import {
  Empty,
  EmptyContent,
    EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { IconCategory } from "@tabler/icons-react"

export function EmptyComponent() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCategory />
        </EmptyMedia>
        <EmptyTitle>Create your Shimeji here</EmptyTitle>
      </EmptyHeader>
      <EmptyContent>
        <Button>Start new project</Button>
      </EmptyContent>
    </Empty>
  )
}