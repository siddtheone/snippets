import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface EditSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: +props.params.id,
    },
  });

  if (!snippet) {
    notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
