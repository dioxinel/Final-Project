const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(favicon(__dirname + '/build/favicon.png'));
app.use(
	'/api',
	createProxyMiddleware({
		target: 'https://apiko-2021-spring-course-api.herokuapp.com/',
		pathRewrite: {
			'^/api': '',
		},
		changeOrigin: true,
	}),
);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
