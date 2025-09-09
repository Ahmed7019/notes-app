import Notes from "@/components/notes";

import AddNewNote from "@/components/addNewNote";
import Collections from "@/components/Collections";
import { fetchAllNotes } from "@/lib/notes";
import AddNewCollection from "@/components/addNewCollection";

export const revalidate = 10;

export default async function Home() {
  const notes = await fetchAllNotes();
  return (
    <main className="flex flex-col gap-10 ">
      <div className="flex justify-between my-8 gap-2  sm:w-[900px]">
        <div className="flex-grow flex-8/12">
          <Notes notes={notes} />
        </div>
        <AddNewNote />
      </div>
      <div className="flex justify-between gap-2 ">
        <div>
          <Collections />
        </div>
        <AddNewCollection />
      </div>
    </main>
  );
}
