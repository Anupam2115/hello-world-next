import './globals.css'; // Optional: If you have global styles

export const metadata = {
  title: 'Hello World App',
  description: 'A simple Next.js app with App Router and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
