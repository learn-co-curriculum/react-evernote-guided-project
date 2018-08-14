const API = `http://localhost:3000`;
const USER_ID = 1;

class Adapter {
  static getNotes() {
    return fetch(`${API}/api/v1/notes`)
      .then(res => res.json())
  }

  static postNote(title, body) {
    return fetch(`${API}/api/v1/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        user_id: USER_ID,
      })
    })
      .then(res => res.json())
  }

  static patchNote(note) {
    return fetch(`${API}/api/v1/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: USER_ID,
      })
    })
      .then(res => res.json())
  }
}

export default Adapter;
