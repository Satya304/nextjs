import FormBMI from "./FormBMI";

export default async function Page({ params }) {
  const { namalengkap } = await params;
  const nama = decodeURIComponent(namalengkap);

  return <FormBMI nama={nama} />;
}