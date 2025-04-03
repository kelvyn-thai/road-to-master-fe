import React from "react";

export default function GreetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="h-[calc(100vh_-_56px)] relative min-h-[648px]"
      data-testid="greeting-section"
    >
      {children}
    </section>
  );
}
