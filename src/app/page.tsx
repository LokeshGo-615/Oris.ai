import {OrganizationSwitcher , UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <h1 className="text-2xl font-semibold">Welcome to the Oris.ai</h1>

      <div className="mt-4 flex gap-4 items-center">
        <OrganizationSwitcher/>
        <UserButton/>
      </div>
    </div>
  );
}