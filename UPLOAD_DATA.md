# Upload data.js

The full educational content file `data.js` (62 KB) is ready locally at:

`/home/workdir/artifacts/greenhouse-effect-master/data.js`

Please upload it to this repo via:

1. GitHub web UI → Add file → Upload files
2. Or:
```bash
cd /home/workdir/artifacts/greenhouse-effect-master
git clone https://github.com/pbwsantu-collab/greenhouse-effect-master.git /tmp/gh-repo
cp data.js /tmp/gh-repo/
cd /tmp/gh-repo && git add data.js && git commit -m "Add data.js" && git push
```

Without `data.js` the app shell loads but content (poem, vocab, quiz) will be missing.
