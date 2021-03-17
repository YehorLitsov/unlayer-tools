let imageTemplate = _.template(`
  <div>I am IMAGE</div>
`);

// let labelTemplate = _.template(`
//   <div>I am LABEL</div>
// `);

// let priceTemplate = _.template(`
//   <div>I am PRICE</div>
// `);

let commonTemplate = _.template(`
   <a class="">
    <% if (product_image === true) { %>
      <%= imageTemplate() %>
      <div>I am IMAGE</div>
    <% } %>
    <% if (product_label === true) { %>
      <div>I am LABEL</div>
    <% } %>
    <% if (product_price === true) { %>
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
        const localValues = {
          product_image: true,
          product_label: true,
          product_price: true
        }
        return commonTemplate(localValues);
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
