const esbuild = require("esbuild");
const processShim = require.resolve("process/browser");

const isWatch = process.argv.includes("--watch");
const isServe = process.argv.includes("--serve");

const baseConfig = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "browser",
  target: "esnext",
  outdir: "public/dist",
  sourcemap: true,
  jsx: "automatic",
  inject: [processShim], // <-- Fixes 'process' is not defined
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
    ".js": "jsx",
    ".png": "file",
    ".svg": "file",
    ".jpg": "file",
  }
};

(async () => {
  // --- Serve Mode (npm start) ---
  if (isServe) {
    const ctx = await esbuild.context(baseConfig);
    await ctx.watch();
    const { host, port } = await ctx.serve({
      servedir: "public",
      port: 3000
    });

    console.log(`🚀 Dev server running at http://${host}:${port}`);
    return;
  }

  // --- Watch Mode Only ---
  if (isWatch) {
    const ctx = await esbuild.context(baseConfig);
    await ctx.watch();
    console.log("👀 Watching for changes...");
    return;
  }

  // --- Build Mode ---
  await esbuild.build(baseConfig);
  console.log("✅ Build complete");
})();
