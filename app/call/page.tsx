import { redirect } from "next/navigation";

// The old sign-and-fabrication landing page. Any link still pointing here goes to booking.
export default function CallPage() {
  redirect("/apply");
}
