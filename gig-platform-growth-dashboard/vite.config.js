import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// base must match the GitHub repo name so assets load on GitHub Pages:
// https://<your-username>.github.io/gig-platform-growth-dashboard/
export default defineConfig({
  base: "/gig-platform-growth-dashboard/",
  plugins: [react()],
  test: { environment: "node" },
});
