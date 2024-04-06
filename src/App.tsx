import { Attendees } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="max-w-[1216] mx-auto py-5 flex-col gap-5">
      <Header />
      <Attendees />
    </div>
  )
}

