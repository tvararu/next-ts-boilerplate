const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = withCss(
  withPurgeCss({
    // Only enable PurgeCSS for client-side production builds
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
    purgeCss: {
      whitelist: ["html", "body"],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "css", "tsx"]
        }
      ]
    }
  })
);
