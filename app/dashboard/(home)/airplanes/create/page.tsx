import { type Metadata } from "next"
import FormAirplane from "../components/form-airplane"

export const metadata: Metadata = {
  title: 'Dashboard | Airplanes'
}
export default function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Add new airplanes data</div>

      </div>
      <FormAirplane />
    </div>
  )
}
