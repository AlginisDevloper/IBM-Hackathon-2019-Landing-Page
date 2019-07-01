digitalData = {
  page: {
    category: {
      primaryCategory: "REPLACE"
    },
    pageInfo: {
      effectiveDate: "REPLACE",
      expiryDate: "REPLACE",
      language: "en-EG",
      publishDate: "REPLACE",
      publisher: "IBM Corporation",
      version: "v18",
      pageID: "REPLACE",
      ibm: {
        contentDelivery: "HTML",
        contentProducer: "",
        country: "EG",
        industry: "REPLACE",
        owner: "IBM",
        siteID: "REPLACE",
        subject: "REPLACE",
        type: "REPLACE"
      }
    }
  }
};

IBMCore.common.util.config.set({
  masthead: {
    type: "alternate"
  },
  footer: {
    type: "alternate",
    socialLinks: {
      enabled: false
    }
  }
});
