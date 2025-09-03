import Notes from "@/components/notes";

import AddNewNote from "@/components/addNewNote";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="flex justify-between my-8 gap-2  sm:w-[900px]">
      <div className="flex-grow flex-8/12">
        <Notes />
      </div>
      <div className="w-[.5px] h-[50rem] bg-neutral-200 shadow-lg rounded-lg"></div>
      <AddNewNote />
    </main>
  );
}
