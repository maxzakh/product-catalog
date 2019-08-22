var repository = [
    {
        name: 'Snorlax',
        height: 2.1,
        types: ['normal']
    },
    {
        name: 'Electabuzz',
        height: 1.1,
        types: ['electric']
    },
    {
        name: 'Slowbro',
        height: 2.1,
        types: ['psychic', 'water']
    }
];

for (let i = 0; i <= repository.length; i++) {
    document.write(repository[i].name + " ");
    document.write("\(height: " + repository[i].height + "\) ");
    if (repository[i].height < 2) {
      document.write("- It's so small ");
    }
  document.write("<br>");
}