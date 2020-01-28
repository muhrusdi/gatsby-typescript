const path = require("path");

const aliases = {
  containers: path.resolve(__dirname, "src/containers"),
  components: path.resolve(__dirname, "src/components"),
  templates: path.resolve(__dirname, "src/templates"),
  images: path.resolve(__dirname, "src/images"),
  utils: path.resolve(__dirname, "src/utils"),
  layout: path.resolve(__dirname, "src/containers/layouts"),
  hocs: path.resolve(__dirname, "src/hocs"),
  hooks: path.resolve(__dirname, "src/hooks"),
  contexts: path.resolve(__dirname, "src/contexts"),
  config: path.resolve(__dirname, "config"),
};


exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: aliases,
    },
  });
};
