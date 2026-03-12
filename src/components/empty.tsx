import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { IconLayoutGridAdd } from "@tabler/icons-react"

export default function EmptyComponent() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconLayoutGridAdd />
        </EmptyMedia>
        <EmptyTitle>Create your Shimeji here</EmptyTitle>
      </EmptyHeader>
      <EmptyContent>
        <Button>Start new project</Button>
      </EmptyContent>
    </Empty>
  )
}