import Notes from "@/components/notes";

import AddNewNote from "@/components/addNewNote";
import Collections from "@/components/Collections";
import { fetchAllNotes } from "@/lib/notes";
import { fetchAllCollections } from "@/lib/collections";
import AddNewCollection from "@/components/addNewCollection";
import Main from "@/components/Main";

export const revalidate = 60; // Revalidate every 60 second

export default async function Home() {
  const notes = await fetchAllNotes();
  const collections = await fetchAllCollections();

  return (
    <>
      <Main notes={notes} collections={collections} />
    </>
  );
}
