import { SharedButton } from "../../../../packages/ui/src/Button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-blue-500 font-bold">Ib Portal</div>
      <SharedButton />
    </div>
  );
}
