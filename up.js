import { Octokit } from "https://esm.sh/@octokit/core";

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
