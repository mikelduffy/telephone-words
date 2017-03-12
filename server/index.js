const Koa = require('koa');
const router = require('koa-route');
const telephoneWords = require('./telephoneWords');

const app = new Koa();

// Set server response time
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// Request logging
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// Main Controller
const controller = {
  root: (ctx) => {
    ctx.body = 'Use GET /telephonewords/:numbers/:english where numbers is a string of digits and english is a boolean that filters for English words (e.g. /telephonewords/4542/true).';
  },
  telephonewords: (ctx, numbers, english) => {
    const response = telephoneWords(numbers.split('').map(Number), JSON.parse(english));
    ctx.body = response;
  },
};

// Routes
app.use(router.get('/', controller.root));
app.use(router.get('/telephonewords/:numbers/:english', controller.telephonewords));

// Start server
app.listen(4000);
