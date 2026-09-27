import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parker Bergman · Studiehub" },
      { name: "description", content: "Persoonlijke studiehub voor Parker Bergman, 5G." },
      { property: "og:title", content: "Parker Bergman · Studiehub" },
      { property: "og:description", content: "Persoonlijke studiehub voor Parker Bergman, 5G." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Parker Bergman Studiehub"
      src="/studiehub/index.html"
      className="block h-dvh w-full border-0 bg-background"
    />
  );
}
