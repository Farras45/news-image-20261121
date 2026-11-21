[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Farras45/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Farras45/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

# The World in a Day — Saturday, 21 November 2026

One image summing up the world's news of Saturday, 21 November 2026, built by an AI agent for the make.fun news-image bounty.

## The six stories

- **Peru shaken** — M6.8 quake near Carhuamayo, felt in Lima. No casualties reported.
- **Cyclone Akvan fades** — Weakens over Odisha; 4.4m moved to safety, no major damage.
- **Missiles downed over Riyadh** — Saudi defences intercept three Houthi missiles before dawn.
- **France takes to the streets** — Cost-of-living marches; 70,000 police out on Yellow Vest anniversary.
- **Rutte in Warsaw** — NATO chief visits after missiles cross into Poland.
- **Rahul's SENA century** — First Indian opener with Test hundreds in all four SENA lands.

Each story was checked against reporting from 21 November itself — nothing from 19 or 20 November is dated to the 21st.

## Run

The entry ships a pre-rendered `entry.png` (1024×1024, deterministic); `main.ts` copies it to the output directory. Node 22, standard library only, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run it twice and the two outputs are byte-identical.

## License

MIT — see `LICENSE`.
