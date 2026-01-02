import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-muted-foreground text-lg">
        I build things for the web.
      </p>
      <div className="flex gap-4">
        <Button>View Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </div>
  );
}
