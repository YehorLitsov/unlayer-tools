let imageTemplate = _.template(`
  <div class="pf-recommended-product-img">{{include_image}}</div>
`);

let labelTemplate = _.template(`
  <div>{{include_label}}</div>
`);

let priceTemplate = _.template(`
  <div>{{include_price}}</div>
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
            width: 140px;
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
    </style>
    <div class="pf-recommended-product">
      <a class="pf-recommended-product-link">
        <% if (include_image === true) { %>
          <%= imageTemplate() %>
        <% } %>
        <% if (include_label === true) { %>
          <%= labelTemplate() %>
        <% } %>
        <% if (include_price === true) { %>
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
  options: {
    default: {
      title: null,
    },
    text: {
      title: 'Text',
      position: 1,
      options: {
        textColor: {
          label: 'Color',
          defaultValue: '#ff0000',
          widget: 'color_picker', // built_in property editor
        },
      },
    },
    // include_image: {
    //   label: 'Include Image',
    //   position: 1,
    //   defaultValue: true,
    //   widget: 'toggle',
    // }
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        console.log('>>> values', values);
        const localValues = {
          include_image: true,
          include_label: true,
          include_price: true,
          text_align: 'center'
        }
        return commonTemplate(localValues);
      }
    }),
    exporters: {
      web: function (values) {
        const localValues = {
          include_image: true,
          include_label: true,
          include_price: true,
          text_align: 'center'
        }
        return commonTemplate(localValues);
      },
      email: function (values) {
        const localValues = {
          include_image: true,
          include_label: true,
          include_price: true,
          text_align: 'center'
        }
        return commonTemplate(localValues);
      }
    },
    head: {
      css: function (values) {},
      js: function (values) {}
    }
  }
});
