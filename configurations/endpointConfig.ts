const endpoints = {
  paywithlinks: {
    paywithlinks: "internal/paywithlinks",
    installments: "internal/paywithlinks/installment",
    initialize: "internal/paywithlinks/initialize",
    preinitialize: "internal/paywithlinks/preinitialize",
  },
  merchantlogodocument: "internal/merchantlogodocument",
  countries: "internal/countries",
  states: {
    stateswithcountry: "internal/states/withcountry",
  },
  cities: {
    citieswithstate: "internal/cities/withstate",
  },
  payments: {
    receipt: "internal/payments/receipt",
    receiptpdf: "internal/payments/receiptpdf",
  },
  payings:{
    inquiry: "internal/payings/inquiry",
  },
  info: {
    companyinfo: "internal/info/companyinfo",
  },
  commonpayments: {
    installments: "external/commonpages/installment",
    commonpayments: "external/commonpages/info",
    init: "external/commonpages/init",
    paying: "external/commonpages/paying",
  },
};

export default endpoints;
