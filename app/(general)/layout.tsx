import { Navbar } from '../../components/navbar/Navbar';

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Hola Mundo</span>
            { children }
        </main>
    </div>
  );
}