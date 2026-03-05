import {
    Alert,
    AlertDescription,
} from "@/components/ui/alert"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { IconAlertCircle } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export function FeatureModal() {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button>Feature Set Modal</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Shimeji Feature Set</DialogTitle>
                <DialogDescription>
                    Select the feature set you want to use for your Shimeji.
                </DialogDescription>
            </DialogHeader>
            <RadioGroup>
                <FieldLabel htmlFor="basic-feature">
                    <Field orientation="horizontal">
                    <FieldContent>
                        <FieldTitle>Basic</FieldTitle>
                        <FieldDescription>
                        Just the basics. Good for beginners.
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="basic" id="basic-feature" />
                    </Field>
                </FieldLabel>
                <FieldLabel htmlFor="shimejiee-feature">
                    <Field orientation="horizontal">
                    <FieldContent>
                        <FieldTitle>Shimeji-ee</FieldTitle>
                        <FieldDescription>
                        All the bells and whistles: Hotspots, SFX, Affordances, Variables.
                        Use this if you're experienced.
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="shimejiee" id="shimejiee-feature" />
                    </Field>
                </FieldLabel>
            </RadioGroup>
            <Alert variant="destructive">
                <IconAlertCircle />
                <AlertDescription>
                    Changing feature sets can result in missing behaviors/actions.
                    This action cannot be undone!
                </AlertDescription>
            </Alert>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Confirm</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    )
}