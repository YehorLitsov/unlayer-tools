let imageTemplate = _.template(`
  <div class="pf-recommended-product-img">I am IMAGE</div>
`);

let labelTemplate = _.template(`
  <div>I am LABEL</div>
`);

let priceTemplate = _.template(`
  <div>I am PRICE</div>
`);

let commonTemplate = _.template(`
    <style>
        .pf-recommended-product {
            text-align: center;
        }
        .pf-recommended-product-link {
            text-decoration: none;
            color: black;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
        }
        .pf-recommended-product-img {
            height: 100px;
            width: 100px;
            background: lightgray;
            border: 2px dashed gray;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
    <div class="pf-recommended-product">
      <a class="pf-recommended-product-link">
        <% if (product_image === true) { %>
          <%= imageTemplate() %>
        <% } %>
        <% if (product_label === true) { %>
          <%= labelTemplate() %>
        <% } %>
        <% if (product_price === true) { %>
          <%= priceTemplate() %>
        <% } %>
      </a>
    </div>
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
