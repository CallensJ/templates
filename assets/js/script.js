fetch('/templates.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const grid = document.getElementById('template-grid');
    data.forEach(template => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${template.image}" alt="${template.name} preview" />
        <h3>${template.name}</h3>
        <p><em>${template.theme}</em></p>
        <p>${template.description}</p>
        <a href="${template.url}" target="_blank">Voir le template</a>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des templates :', error);
  });
