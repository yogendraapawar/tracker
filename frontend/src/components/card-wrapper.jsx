import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from "react"

export function CardWrapper({ title, description, footer, children, visuallyHideTitle = false }) {
    return (
        <Card>
            <CardHeader>
                {title && (
                    <CardTitle className={visuallyHideTitle ? "sr-only" : ""}>
                        {title}
                    </CardTitle>
                )}
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>

            <CardContent>{children}</CardContent>

            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    )
}
