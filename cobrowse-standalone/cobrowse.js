if (window.ININ.cobrowse.isSupported()) {
  window.ININ.cobrowse.load({
    locale: 'en',
    logLevel: 'INFO'
  }, function(err, cobrowse) {
    if (err) {
      throw err;
    }

    console.log('Initiating co-browsing...');
    window.ININ.cobrowse.startSharing({
      cobrowseServiceHost: 'cobrowse.mypurecloud.com',
      participant: {
        displayName: 'John Doe'
      }
    }).then(function(sharerSession) {
      console.log('Co-browse initiated. Page is being shared.');
      console.log('Viewer URL: ' + sharerSession.getViewerUrl());
    }).catch(function(err) {
      console.error('Unable to share page', (err.stack || err));
    });
  });
} else {
  throw new Error('Co-browse is not supported');
}
