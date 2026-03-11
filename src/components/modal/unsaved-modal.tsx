import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"

import { IconAlertTriangle } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export default function UnsavedModal() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Unsaved Modal</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogMedia>
                        <IconAlertTriangle />
                    </AlertDialogMedia>
                    <AlertDialogTitle>You have unsaved changes</AlertDialogTitle>
                    <AlertDialogDescription>
                        Do you want to save your project before CURRENT_ACTION?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>No</AlertDialogAction>
                    <AlertDialogAction>Yes</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}