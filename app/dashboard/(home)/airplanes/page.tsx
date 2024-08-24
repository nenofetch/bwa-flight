import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { columns } from "./components/columns-table";
import { getAirPlanes } from "./lib/data";


export const metadata: Metadata = {
  title: 'Dashboard | Airplanes'
}

export default async function Page() {
  const planes = await getAirPlanes();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Airplanes</div>
        <Button asChild>
          <Link href={'/dashboard/airplanes/create'}>
            <Plus className="mr-2 h-4 w-4" />
            Add Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={planes} />
    </>
  )
}
