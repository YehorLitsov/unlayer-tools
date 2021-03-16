let imageTemplate = _.template(`
  <div>I am IMAGE</div>
`);

let labelTemplate = _.template(`
  <div>I am LABEL</div>
`);

let priceTemplate = _.template(`
  <div>I am PRICE</div>
`);

unlayer.registerTool({
  name: "recommended_product",
  label: "Recommended product",
  icon: "fa-shopping-basket",
  supportedDisplayModes: ["web", "email"],
  options: {},
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return imageTemplate();
      }
    }),
    exporters: {
      web: function (values) {
        return "<div>I am a custom tool.</div>";
      },
      email: function (values) {
        return "<div>I am a custom tool.</div>";
      }
    },
    head: {
      css: function (values) {},
      js: function (values) {}
    }
  }
});
