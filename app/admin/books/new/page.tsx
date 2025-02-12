import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookForm from "../../forms/BookForm";

const Page = () => {
  return (
    <>
      <Button className="back-btn" asChild>
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm type="create"/>
      </section>
    </>
  );
}

export default Page;