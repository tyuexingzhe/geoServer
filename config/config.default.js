'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1498198494981_6588',

    middleware: ['errorHandler', 'saveSession'],
    errorHandler: {
      match: '/api',
    },

    static: { prefix: '' },

    mongoose: {
      url: 'mongodb://127.0.0.1:27017/geoServer',
      options: {},
    },

    notfound: {
      pageUrl: '/404.html',
    },

    security: {
      csrf: {
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      },
    },
  };
  return config;
};
