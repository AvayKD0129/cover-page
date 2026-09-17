#!/usr/bin/env python3
"""Fetch App Store icons into public/apps/ as matching .webp + .jpg pairs.

Usage:
    python3 scripts/fetch-icons.py <appStoreId>:<storefront>:<slug> [...]

Example:
    python3 scripts/fetch-icons.py 434613896:in:zomato 1599075496:at:magentatv-polska

The slug becomes the `icon` stem in src/data/resume.ts (e.g. '/apps/zomato').
Requires Pillow.
"""
import io
import json
import pathlib
import sys
import urllib.request

from PIL import Image

SIZE = 256  # covers a 128px display box at 2x
OUT = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'apps'


def fetch(url: str) -> bytes:
    req = urllib.request.Request(
        url, headers={'Accept-Encoding': 'identity', 'User-Agent': 'Mozilla/5.0'}
    )
    return urllib.request.urlopen(req, timeout=30).read()


def main(specs: list[str]) -> int:
    if not specs:
        print(__doc__)
        return 1

    OUT.mkdir(parents=True, exist_ok=True)
    for spec in specs:
        try:
            track_id, storefront, slug = spec.split(':')
        except ValueError:
            print(f'skipping malformed spec: {spec!r} (want id:storefront:slug)')
            continue

        meta = json.loads(fetch(f'https://itunes.apple.com/lookup?id={track_id}&country={storefront}'))
        results = meta.get('results') or []
        if not results:
            print(f'no App Store result for id {track_id} in storefront {storefront!r}')
            continue

        app = results[0]
        icon_url = app.get('artworkUrl512') or app.get('artworkUrl100')
        icon = Image.open(io.BytesIO(fetch(icon_url))).convert('RGB').resize(
            (SIZE, SIZE), Image.LANCZOS
        )

        for ext, opts in (
            ('webp', {'quality': 88, 'method': 6}),
            ('jpg', {'quality': 86, 'optimize': True, 'progressive': True}),
        ):
            path = OUT / f'{slug}.{ext}'
            icon.save(path, **opts)
            print(f'{path.relative_to(OUT.parent.parent)}  {path.stat().st_size / 1024:.1f} KB  ({app["trackName"]})')

    return 0


if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
