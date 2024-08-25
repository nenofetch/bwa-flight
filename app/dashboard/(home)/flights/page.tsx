import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard | Flights'
}

export default function Page() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Flights</div>
      </div>
    </>
  )
}
