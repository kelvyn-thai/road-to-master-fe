import React from "react";

export default function GreetingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="w-full h-[calc(100vh_-_56px)] bg-primary-100 relative"
      data-testid="greeting-section"
    >
      {children}
    </section>
  );
}
