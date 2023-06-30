const notes = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get("/", (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        const notesData = JSON.parse(data);
        const note = notesData.find((note) => note.id === req.params.id);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    });
});

//get notes by ID
notes.get("/:id", (req, res) => {
    res.json(JSON.parse(data)[req.params.id]);
});

notes.post("/", (req, res) => {
    const { title, text } = req.body;
    if(req.body){
        const newTask = {
            title,
            text,
            id: uuidv4(),
        }
        readAndAppend(newTask, './db/db.json')
        res.json('Task added Successfully!')
    } else {
        res.error('Error in posting task')
    }
});

//add delete route

module.exports = notes;