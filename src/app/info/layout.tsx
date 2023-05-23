







export default function InfoLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className={``}>
        <body className={`animate-fade`}>{children}</body>
      </html>
    );
  }
  
  
  