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
            <AlertDialogTrigger render={<Button />}>Unsaved Modal</AlertDialogTrigger>
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
                    <AlertDialogAction variant="outline">No</AlertDialogAction>
                    <AlertDialogAction variant="destructive">Yes</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}