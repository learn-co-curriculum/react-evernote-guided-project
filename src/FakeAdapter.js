import uuid from 'uuid';

let database = {
  notes: [],
};

class Adapter {
  static getNotes() {
    return new Promise((resolve, reject) => {
      resolve([...database.notes]);
    })
  }

  static postNote(title, body) {
    return new Promise((resolve, reject) => {
      const newNote = { id: uuid(), title, body };
      database.notes.push(newNote);
      resolve({...newNote});
    })
  }

  static patchNote(note) {
    return new Promise((resolve, reject) => {
      const notes = database.notes.map(n => {
        if (n.id === note.id) {
          return note;
        }
        return n;
      });
      database.notes = notes;
      resolve({...note});
    })
  }
}

export default Adapter;
