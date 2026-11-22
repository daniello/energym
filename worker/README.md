# Energym gate (Cloudflare Worker)

Serves the built site from `../site/dist` and requires HTTP Basic Auth.

## Deploy

```bash
cd ../site && npm run build
cd ../worker && wrangler deploy
```

`wrangler.jsonc` binds the Worker to the `eg.lambder.com` custom domain.

## Secrets

Set once (or to rotate the password):

```bash
wrangler secret put BASIC_USER
wrangler secret put BASIC_PASS
```

The values are stored in Cloudflare, not in this repo.

## Notes

- `assets.run_worker_first` is enabled so the auth check runs before any
  static asset is served.
- Without valid credentials every request, including assets, returns 401 with a
  `WWW-Authenticate` header, so browsers show the native login prompt.
- GitHub Pages is no longer the origin for `eg.lambder.com`; the Worker serves
  the build directly.
