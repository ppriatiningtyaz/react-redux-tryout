"use client";

import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slice";
import { change } from "./store/booleanSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const boolValue = useSelector((state: RootState) => state.bool.value);
  const dispatch = useDispatch();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 py-5">
      <div className="flex items-center justify-center gap-2">
        <button
          className="rounded-lg border border-black px-8 py-1 hover:border-white hover:bg-black/40 hover:text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="">{count}</span>
        <button
          className="rounded-lg border border-black px-8 py-1 hover:border-white hover:bg-black/40 hover:text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <button
          className="rounded-lg border border-black px-8 py-1 hover:border-white hover:bg-black/40 hover:text-white"
          onClick={() => dispatch(change())}
        >
          change value
        </button>

        <p className="text-black">
          boolean value : {boolValue ? "true" : "false"}
        </p>
      </div>

      {boolValue ? (
        <div className="fixed left-0 top-0 z-[150] flex h-screen w-screen items-center justify-center bg-black bg-opacity-10">
          <div className="flex h-40 w-96 flex-col items-center justify-center gap-2 bg-white">
            <button onClick={() => dispatch(change())}>close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
