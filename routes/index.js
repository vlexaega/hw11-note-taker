const express = require('express');
const { clog } = require('../middleware/clog');

const notesRouter = require('./notes');

const app = express();

app.use("/notes", notesRouter);
app.use(clog);

module.exports = app;