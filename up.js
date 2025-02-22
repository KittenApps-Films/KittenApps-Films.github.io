import { Octokit } from "https://cdn.skypack.dev/octokit";

export const octokit = new Octokit({
  auth: "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",
});

const repo = await octokit.request(
  "GET /users/{username}/repos{?type,sort,direction,per_page,page}",
  {
    username: "KittenApps-Films",
  }
);
console.log(repo);
