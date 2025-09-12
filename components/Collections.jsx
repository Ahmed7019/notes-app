import { fetchAllCollections } from "@/lib/collections";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from "./ui/dialog";

async function Collections() {
  const collections = await fetchAllCollections();
  console.log(collections);
  if (!collections || collections.length === 0)
    return <p>No collections added yet :(</p>;
  return (
    <>
      <div className="grid grid-cols-4 gap-10 my-8">
        {collections.map((collection) => (
          <Dialog key={collection._id}>
            <DialogTrigger asChild>
              {/* The folder structure */}
              <div
                className={`cursor-pointer hover:before:bg-yellow-200/80 relative before:w-16 before:h-6 before:bg-yellow-100 before:-z-50 before:border before:border-yellow-300 before:rounded-r-4xl before:rounded-l-md before:-top-3 before:left-0 before:absolute bg-yellow-200 w-40 h-30 rounded-b-4xl rounded-tr-[60%] border border-yellow-300 shadow`}
              >
                <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow absolute top-5 left-2  "></div>
                <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow absolute top-6 left-6  rotate-6"></div>
                <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow absolute top-5 left-10  rotate-12 overflow-hidden">
                  <p className="p-2 text-xs text-nowrap">
                    {collection.description}
                  </p>
                </div>

                <div
                  className={`w-full h-15 relative top-15 bg-yellow-400 shadow-lg backdrop-saturate-100  rounded-b-4xl`}
                >
                  <div className="w-full flex items-center justify-between p-1 z-20">
                    <p className="text-sm text-neutral-900 bg-neutral-50/50 rounded-4xl border border-white shadow  backdrop-blur-md font-semibold p-1">
                      {collection.title}
                    </p>
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="flex justify-center z-100  bg-neutral-50 p-8 shadow-2xl border rounded-lg">
              <div className=" sm:w-[900px] max-h-screen flex flex-col items-center justify-center">
                <DialogHeader className={"flex items-center mb-4"}>
                  <DialogTitle>{collection.title}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-4 gap-4 items-center">
                  {Array.from({ length: 10 }).map((ele) => (
                    <div
                      key={ele}
                      className="w-40 h-40 rounded-lg bg-blue-100 border drop-shadow-lg"
                    ></div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}

export default Collections;
