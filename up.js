async function upload() {
  const message = 'amogus';
  const content = 'aaaaa';
  const owner = 'KittenApps-Films';
  const repo = 'KittenApps-Films.github.io';
  const path = 'amogus.html';
  const auth = '{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}';

  const existingFile = await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      }
    }
  )).json();

  await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({
        message: message,
        content: btoa(content),
        sha: existingFile.sha,
      }),
    }
  )).json();
}
upload()
