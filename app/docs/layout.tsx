import { DocsSidebar } from '@/components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 bg-[var(--color-background-surface)]">
        <div className="max-w-7xl mx-auto p-12">
          {children}
        </div>
      </main>
    </div>
  );
}


