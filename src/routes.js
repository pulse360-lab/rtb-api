const express = require('express'),
    locale = require('./api/locale'),
    realTime = require('./api/realtime');

const prefix = 'v1';

module.exports = (app) => {
    app.get(`/${prefix}/locale`, locale.get),
    app.get(`/${prefix}/realtime/info`, realTime.getInfo)
};