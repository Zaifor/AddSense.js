[![Waffle.io - Columns and their card count](https://badge.waffle.io/Zaifor/AddSense.js.png?columns=all)](https://waffle.io/Zaifor/AddSense.js?utm_source=badge)
# AddSense.js
Async AdSense Banners via Javascript

Example:

```
AddSense.unit({
  container : ".view-banner",
  client : "ca-pub-xxxxxxxxxxxxxxxx",
  slot : "xxxxxxxxxx",
  width : 300,
  height : 250,
  overrideFormat : "true",
  pageUrl : "http://www.example.com",
  language: "en"
}).render();
```
