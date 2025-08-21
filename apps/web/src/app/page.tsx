import { SharedButton } from "../../../../packages/ui/src/Button";

export default function Home() {
  console.log("Web", process.env.WITHDRAWAL_MIN_AMOUNT);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-blue-500 font-bold">Web</div>
      <SharedButton />
    </div>
  );
}
