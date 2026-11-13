import { Suspense } from "react";
import FormBMI from "./FormBMI";

async function Konten({ params }) {
  const { namalengkap } = await params;
  const nama = decodeURIComponent(namalengkap);
  return <FormBMI nama={nama} />;
}

export default function Page({ params }) {
  return (
    <Suspense fallback={<p>Memuat...</p>}>
      <Konten params={params} />
    </Suspense>
  );
}