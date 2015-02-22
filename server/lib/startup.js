if (Channels.find().count() === 0) {
  Channels.insert({
    name: 'Anime',
  });
  Channels.insert({
    name: 'Programming',
  });
  Channels.insert({
    name: 'Sports',
  });
  Channels.insert({
    name: 'Manga',
  });
}
