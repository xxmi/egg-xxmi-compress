module.exports = app => {
  // 加入 gzip 压缩中间件
  const before = app.config.xxmiCompress.before;
  if (!app.config.coreMiddleware.some(middleware => middleware === 'compress')) {
    const index = app.config.coreMiddleware.findIndex(middleware => middleware === before);
    if (index > -1) {
      app.config.coreMiddleware.splice(index, 0, 'compress');
    } else {
      app.config.coreMiddleware.unshift('compress');
    }
  }
};
