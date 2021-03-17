let imageTemplate = _.template(`
  <div class="pf-recommended-product-img">{{image}}</div>
`);

let labelTemplate = _.template(`
  <div class="pf-recommended-product-label">{{label}}</div>
`);

let priceTemplate = _.template(`
  <div class="pf-recommended-product-price">{{price}}</div>
`);

let commonTemplate = _.template(`
    <!--Styles placed here to be dynamically changed in ui, if it will be placed in head.css they will be changed 
    once on init-->
    <style>
        .pf-recommended-product {
            text-align: <%= productAlign%>;
        }
        .pf-recommended-product-link {
            text-decoration: none;
            color: black;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            width: 140px;
            margin: 0 5px;
        }
        .pf-recommended-product-img {
            height: 140px;
            width: 140px;
            background: lightgray;
            border: 2px dashed gray;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pf-recommended-product-label {
            font-size: 16px;
        }
        .pf-recommended-product-price {
            font-size: 12px;
        }
    </style>
    <div class="pf-recommended-product">
      <% for (let i = 0; i < productQuantity; i++) {%>
        <a class="pf-recommended-product-link" target="_blank">
          <% if (includeImage === true) { %>
            <%= imageTemplate() %>
          <% } %>
          <% if (includeLabel === true) { %>
            <%= labelTemplate() %>
          <% } %>
          <% if (includePrice === true) { %>
            <%= priceTemplate() %>
          <% } %>
        </a>
      <% } %>
    </div>
`);

unlayer.registerTool({
  name: "recommended_product",
  label: "Recommended product",
  icon: "fa-shopping-basket",
  supportedDisplayModes: ["web", "email"],
  options: {
    default: {
      title: null,
    },
    productConfigs: {
      title: 'Product Configurations',
      position: 1,
      options: {
        productQuantity: {
          label: 'Products Quantity in Template',
          defaultValue: 1,
          widget: 'dropdown',
        },
        productAlign: {
          label: 'Product Align',
          defaultValue: 'center',
          widget: 'dropdown',
        },
        includeImage: {
          label: 'Include Image',
          defaultValue: true,
          widget: 'toggle',
        },
        includeLabel: {
          label: 'Include Label',
          defaultValue: true,
          widget: 'toggle',
        },
        includePrice: {
          label: 'Include Price',
          defaultValue: true,
          widget: 'toggle',
        }
      }
    }
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        console.log('>>> values', values);
        return commonTemplate(values);
      }
    }),
    exporters: {
      web: function (values) {
        return commonTemplate(values);
      },
      email: function (values) {
        return commonTemplate(values);
      }
    },
    head: {
      css: function (values) {},
      js: function (values) {}
    }
  }
});
