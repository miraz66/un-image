import {
  HeartIcon,
  PlusIcon,
  ArrowDownIcon,
  UserCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

class ImagesHover {
  FavouritFilfd() {
    return (
      <div>
        <div className="flex justify-center gap-2">
          <HeartIcon className="text-gray-700 w-7 bg-white p-2 rounded-sm" />
          <PlusIcon className="text-gray-700 w-7 bg-white p-2 rounded-sm" />
        </div>
      </div>
    );
  }

  UserFild() {
    return (
      <div>
        <div className="flex justify-between w-full items-center ">
          <div className=" flex justify-center items-center gap-1">
            <div className="">
              <UserCircleIcon className="w-8" />
            </div>
            <div className="">
              <h1 className="text-xs">MD.MIRAZUL ISLAM</h1>
              <div className=" flex gap-1 justify-center">
                <p className="text-xs">Available for hire</p>
                <CheckCircleIcon className="w-3 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="">
            <ArrowDownIcon className="w-7 p-2 rounded bg-gray-300 text-gray-800" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesHover;
