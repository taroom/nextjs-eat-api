import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Halaman Depan</h1>

    <Link href="/post">Ke Halaman Post</Link><br />
    <Link href="/albums">Ke Halaman Album</Link><br />
    </>
  );
}
