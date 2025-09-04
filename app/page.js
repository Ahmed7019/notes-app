import Notes from "@/components/notes";

import AddNewNote from "@/components/addNewNote";
import Collections from "@/components/Collections";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <div className="flex justify-between my-8 gap-2  sm:w-[900px]">
        <div className="flex-grow flex-8/12">
          <Notes />
        </div>
        <AddNewNote />
      </div>
      <Collections />
    </main>
  );
}
