const { createServer } = require('http');
const next = require('next');

//initialize nextJS to intercept app
const app = next({
	dev: process.env.NODE.ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	createServer(handler).listen(3000, (err) => {
		if (err) throw err;
		console.log('Siap di localhost 3000');
	})
})