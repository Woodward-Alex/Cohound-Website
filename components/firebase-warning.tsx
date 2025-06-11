import { Alert, AlertDescription } from "@/components/ui/alert"

export function FirebaseWarning() {
  return (
    <Alert variant="destructive">
      <AlertDescription>
        Firebase is not configured. Please check your environment variables.
      </AlertDescription>
    </Alert>
  )
}