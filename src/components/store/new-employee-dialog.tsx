import {Plus} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function NewEmployeeDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    onClick={() => console.log('Add')}
                    variant="default"
                    size="sm"
                    className="h-8 gap-1 text-sm"
                >
                    <span className="sr-only sm:not-sr-only">Add</span>
                    <Plus className="h-8 w-8"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Service</DialogTitle>
                    <DialogDescription>
                        Add a new employee to your store
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    New Employee Inputs here
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Add
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
