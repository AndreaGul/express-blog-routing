const { readJSON } = require('../utils');

module.exports = {
  list: (req, res) => {
    const posts = readJSON('posts');
    res.format({
      html: () => {
        let html = '<main><ul>';
        posts.forEach(({ titolo, contenuto, immagine, tags }) => {
          html += `<li>Film</li>
          <li>titolo: ${titolo}</li>
          <li>${contenuto}</li>
          <li><img width="200px" src="/${immagine}"/></li>
          <li>tags: ${tags}</li>`;
        });
        html += '</ul><main>';
        res.send(html);
      },
      json: () => {
        res.json(posts);
      },
    });
  },
};
