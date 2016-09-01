/**
 * This configuration should be edited to fit the needs of the developer and
 * their specific installations.
 */
var config = {
  orgId: '',
  orgName: '',
  queueName: '',
  agentEmail: '',
  cobrowseDeploymentKey: ''
};

var webchatConfig = {
  webchatAppUrl: 'https://apps.mypurecloud.com/webchat',
  webchatServiceUrl: 'https://realtime.mypurecloud.com:443',
  orgId: config.orgId,
  orgName: config.orgName,
  queueName: config.queueName,
  priority: '0',
  agentEmail: config.agentEmail,
  logLevel: 'DEBUG',
  locale: 'en',
  data: {
    firstName: 'Chris',
    lastName: 'Customer',
    addressStreet: '580 Reginald Alley',
    addressCity: 'West Lillian',
    addressPostalCode: '34449-2134',
    addressState: 'VT',
    phoneNumber: '161-478-0762 x706',
    phoneType: 'Cell',
    customerId: 99178
  },
  companyLogo: {
    width: 600,
    height: 149,
    url: 'https://dhqbrvplips7x.cloudfront.net/webchat/1.0.100/company-logo-large-cea5ee47.png'
  },
  companyLogoSmall: {
    width: 149,
    height: 149,
    url: 'https://dhqbrvplips7x.cloudfront.net/webchat/1.0.100/company-logo-small-9c9fe09b.png'
  },
  agentAvatar: {
    width: 462,
    height: 462,
    url: 'https://dhqbrvplips7x.cloudfront.net/webchat/1.0.100/agent-e202505f.png'
  },
  userAvatar: {
    width: 462,
    height: 462,
    url: 'https://dhqbrvplips7x.cloudfront.net/webchat/1.0.100/user-e202505f.png'
  },
  welcomeMessage: 'Please wait while we connect you to one of our agents.',
  maskPatterns: [
    '5[1-5][0-9]{14}',
    '4[0-9]{12}(?:[0-9]{3})?',
    '3[47][0-9]{13}',
    '6(?:011|5[0-9]{2})[0-9]{12}'
  ],
  cobrowseType: 'PURECLOUD',
  cssClass: 'webchat-frame',
  cobrowseConfig: {
    deploymentKey: config.cobrowseDeploymentKey,
    cobrowseServiceHost: 'cobrowse.mypurecloud.com'
  }
};

window.ININ.webchat.create(webchatConfig, function(err, webchat) {
  if (err) {
    throw err;
  }

  webchat.renderFrame({
    containerEl: 'chatContainer'
  });
});
