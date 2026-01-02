export default function Projects() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will go here */}
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-muted-foreground">Description of project 1...</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-muted-foreground">Description of project 2...</p>
        </div>
      </div>
    </div>
  )
}
