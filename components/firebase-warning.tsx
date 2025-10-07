// components/firebase-warning.tsx
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export function FirebaseWarning() {
  return (
    <Alert className="border-orange-200 bg-orange-50 text-orange-800">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        <strong>Demo Mode:</strong> Firebase is not fully configured. Authentication will work in demo mode for testing purposes.
      </AlertDescription>
    </Alert>
  )
}