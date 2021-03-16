// let imageTemplate = _.template(`
//   <div>I am IMAGE</div>
// `);

// let labelTemplate = _.template(`
//   <div>I am LABEL</div>
// `);

// let priceTemplate = _.template(`
//   <div>I am PRICE</div>
// `);

let commonTemplate = _.template(`
   <a>
    <% if (values.product_image === true) { %>
      <div>I am IMAGE</div>
    <% } %>
    <% if (values.product_label === true) { %>
      <div>I am LABEL</div>
    <% } %>
    <% if (values.product_price === true) { %>
      <div>I am PRICE</div>
    <% } %>
   </a>
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
        values.product_image = true;
        values.product_label = true;
        values.product_price = true;
        return commonTemplate(values);
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
