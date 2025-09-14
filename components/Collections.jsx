import { fetchAllCollections } from "@/lib/collections";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "./ui/dialog";

async function Collections() {
  const collections = await fetchAllCollections();
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
                <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow-xl absolute top-5 left-2  "></div>
                <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow-xl absolute top-3 left-5  rotate-6"></div>
                <div className="bg-white w-20 rotate-x-20 h-20 border rounded shadow-xl absolute top-2 left-10  rotate-10 overflow-hidden ">
                  <p className="p-2 text-black text-xs text-wrap">
                    {collection.title}
                  </p>
                </div>

                <div
                  className={`w-full h-15 relative top-15 bg-yellow-400 shadow-lg backdrop-saturate-100  rounded-b-4xl`}
                >
                  <div className="w-full flex items-center justify-between p-1 z-20">
                    <p className="text-xs text-neutral-700 bg-neutral-50/50 rounded-4xl border border-white shadow backdrop-blur-md font-semibold py-2 px-1 ">
                      {collection.title}
                    </p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className=" !max-w-[80rem] !max-h-[90vh] bg-neutral-50  overflow-y-auto ">
              <DialogHeader className={"mb-4"}>
                <DialogTitle>{collection.title}</DialogTitle>
                <DialogDescription>{collection.description}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-4 gap-4 items-center">
                {Array.from([
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 811, 23, 345, 657, 80, 12, 34, 45,
                  56, 67, 78, 89, 98, 87, 76, 65, 54, 43, 32, 21,
                ]).map((ele) => (
                  <div
                    key={ele}
                    className="w-70 h-40 rounded-md bg-green-100 border shadow"
                  ></div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}

export default Collections;
