import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

const handleRequest = (request) => {
  console.log(`Request to ${request.url}`);
  return new Response("Hello world!");
};

// console.log("Launching server on port 31337");
serve(handleRequest, { port: 31337 });
