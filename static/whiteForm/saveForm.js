var button = document.getElementById('saveForm');
button.addEventListener(
    'click',
    function() {
        fbq('track', 'WhitelistRegistration', {
            content_name: 'Whitelist Registration',
        });
    },
    false
);
