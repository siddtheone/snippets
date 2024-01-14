"use client";

interface CreateErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function CreateErrorPage({
  error,
  reset,
}: CreateErrorPageProps) {
  return (
    <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
      {error.message}
    </div>
  );
}
