var bibleVerses = [
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
    "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6",
    "The Lord is my shepherd, I lack nothing. - Psalm 23:1"
    // Adicione mais versículos bíblicos conforme necessário
  ];

  function showRandomVerse() {
    var randomIndex = Math.floor(Math.random() * bibleVerses.length);
    var verseElement = document.getElementById("verse");
    verseElement.textContent = bibleVerses[randomIndex];
  }