import { Alert, AlertDescription } from "@/components/ui/alert"

export function FirebaseWarning() {
  return (
    <Alert variant="destructive">
      <AlertDescription>
        Looks like we are having trouble authenticating you at this time. Please email contact@cohound.com for further support.
      </AlertDescription>
      </Alert>
      )
}