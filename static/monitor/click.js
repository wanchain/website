$('a[href^="https://t.me/WanchainANN"]').click(function () {
    fbq('track', 'Telegram', {
        content_name: 'TelegramClick',
    });
});

$('a[href^="https://wanchain.herokuapp.com"]').click(function () {
    fbq('track', 'Slack', {
        content_name: 'SlackClick',
    });
});

$('a[href^="https://twitter.com/wanchain_org"]').click(function () {
    fbq('track', 'Twitter', {
        content_name: 'TwitterClick',
    });
});

$('a[href^="https://www.reddit.com/r/wanchain"]').click(function () {
    fbq('track', 'Reddit', {
        content_name: 'RedditClick',
    });
});

$('a[href^="https://www.facebook.com/wanchainfoundation"]').click(function () {
    fbq('track', 'Facebook', {
        content_name: 'FacebookClick',
    });
});

$('a[href^="http://weibo.com/wanchain"]').click(function () {
    fbq('track', 'Weibo', {
        content_name: 'WeiboClick',
    });
});
