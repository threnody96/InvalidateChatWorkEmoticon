const self = require("sdk/self");
const pageMod = require("sdk/page-mod");
const data = self.data;

pageMod.PageMod({
  include: ["https://www.chatwork.com/*"], 
  contentScriptFile: [data.url("jquery.min.js"),
                      data.url("jquery.inview.min.js"),
                      data.url("script.js")]
});

