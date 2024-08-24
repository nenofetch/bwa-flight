import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default function Page () {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
    </div>
  )
}