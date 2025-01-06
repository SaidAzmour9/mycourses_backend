const express = require('express');
const cors = require('cors');
const { default: helmet } = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
app.disable("x-powered-by");

app.use(helmet());
 
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use(cors());
app.use(express.json());


module.exports = app;
