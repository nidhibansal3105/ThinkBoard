import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
        {/* Icon Circle */}
        <div className="rounded-full p-8 bg-[var(--bg-color1)]">
          <NotebookIcon className="size-10 text-primary notebook-icon" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold">No notes yet</h3>

        {/* Description */}
        <p className="text-base-content/80">
          Ready to organize your thoughts? Create your first note to get started
          on your journey.
        </p>

        {/* Button */}
        <Link
          to="/create"
          className="btn butt no-notes-but matt-effect p-3 pr-5 pl-5"
        >
          Create Your First Note
        </Link>
      </div>
    </>
  );
};

export default NotesNotFound;
