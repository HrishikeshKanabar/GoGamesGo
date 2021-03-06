INSERT INTO games (game_title, publication_year, game_genre,game_desc, console)
VALUES
('Final Fantasy VII', 1997, 'RPG', 'game_desc','PlayStation 1'),
('Red Dead Redemption', 2010, 'Action-Adventure','game_desc', 'XBOX 360'),
('The Witcher 3: Wild Hunt', 2015, 'RPG', 'game_desc','PlayStation 4'),
('Monster Hunter: World', 2018, 'RPG', 'game_desc','PlayStation 4'),
('Dark Souls', 2011, 'RPG', 'game_desc','XBOX 360'),
('Dark Souls 2', 2014, 'RPG', 'game_desc','XBOX 360'),
('Dark Souls 3', 2016, 'RPG','game_desc','XBOX 360'),
('Grand Theft Auto V', 2013, 'Action-Adventure', 'game_desc','PlayStation 3'),
('Animal Crossing: New Horizons', 2020, 'Simulation', 'game_desc','Nintendo Switch'),
('Pokemon Yellow', 1998, 'RPG','game_desc', 'Game Boy'),
('Suikoden 3', 2002, 'RPG', 'game_desc','PlayStation 2'),
('Call of Duty: BlackOps', 2010, 'FPS','game_desc', 'PlayStation 3');

INSERT INTO reviews (review_desc, rating, game_id)
VALUES
('One of the best JRPGS of all time!', 5, 1),
("Who doesn't want to pretend to be a cowboy in the wild west?", 4, 2),
('If you like expansive medieval fantasy stories, then this is the one for you!', 4, 3),
('There is nothing more exciting than climbing a giant monster, and making armour from it.', 3, 4),
('Renowned for its difficulty, Dark Souls is an immensely satisfying video game in a dark decaying world.', 4, 5),
('Not as good as the first entry in the series. It was a disappointing addition to the series', 3, 6),
('The final entry to the Dark Souls series. Rest in peace, Dark Souls. You were great.', 4, 7),
('Rockstar makes great games, and GTA 5 is world of fun that you will keep you playing for hours', 4, 8),
("A social simulation game that is fun to play if you enjoy a more relaxing game", 3, 9),
("Everyone knows Pokemon! What is more fun that having Pikachu follow you around with the original Pokedex?", 4, 10),
("Suikoden 3 is a flawed masterpiece, and it's Fairfax's favourite game of all time", 5, 11),
("One of the original and best entries to the COD games!", 5, 12);