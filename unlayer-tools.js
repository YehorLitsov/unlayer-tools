let imageTemplate = _.template(`
  <div class="pf-recommended-product-img">{{product_image}}</div>
`);

let labelTemplate = _.template(`
  <div>{{product_label}}</div>
`);

let priceTemplate = _.template(`
  <div>{{product_price}}</div>
`);

let commonTemplate = _.template(`
    <style>
        .pf-recommended-product {
            text-align: <%= text_align%>;
        }
        .pf-recommended-product-link {
            text-decoration: none;
            color: black;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
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

const localValues = {
  product_image: true,
  product_label: true,
  product_price: true,
  text_align: 'center'
}

unlayer.registerTool({
  name: "recommended_product",
  label: "Recommended product",
  icon: "fa-shopping-basket",
  supportedDisplayModes: ["web", "email"],
  options: {
    align_products: {
      title: 'Align Products',
      defaultValue: 'center',
      widget: 'dropdown'
    },
    include_image: {
      title: 'Include Image',
      defaultValue: true,
      widget: 'toggle'
    },
    include_label: {
      title: 'Include Label',
      defaultValue: true,
      widget: 'toggle'
    },
    include_price: {
      title: 'Include Price',
      defaultValue: true,
      widget: 'toggle'
    }
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return commonTemplate(localValues);
      }
    }),
    exporters: {
      web: function (values) {
        return commonTemplate(localValues);
      },
      email: function (values) {
        return commonTemplate(localValues);
      }
    },
    head: {
      css: function (values) {
        return `
        .pf-recommended-product {
            text-align: <%= text_align%>;
        }
        .pf-recommended-product-link {
            text-decoration: none;
            color: black;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
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
        `
      },
      js: function (values) {}
    }
  }
});
