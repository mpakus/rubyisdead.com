# rubyisdead.com

Renat’s Ruby on Rails consulting site. The repository root contains the complete static site and its self-hosted assets.

## Preview locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://127.0.0.1:8000/). Pricing, copy, and email links are in `index.html`. The three inquiry links open an email draft addressed to `renat@aomega.co`.

## GitHub Pages

1. Push the site to the target repository. In **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/(root)`.
2. Verify `rubyisdead.com` in the GitHub account’s Pages settings, then set it as the repository’s custom domain. The root `CNAME` already contains the domain.
3. Follow GitHub’s [apex domain DNS instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain). Enable **Enforce HTTPS** once the certificate is available.

Review [GitHub Pages’ commercial usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits) before publishing. The site can also be served as-is by a static host that supports commercial use.
