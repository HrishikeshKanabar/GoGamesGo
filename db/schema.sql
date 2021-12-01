DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS reviews;

CREATE TABLE games (
    id INT NOT NULL AUTO_INCREMENT,
    game_title VARCHAR (80) NOT NULL,
    publication_year INT NOT NULL,
    game_genre VARCHAR (30) NOT NULL,
    game_desc VARCHAR (1000) NOT NULL,
    console VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    review_desc TEXT NOT NULL,
    rating INT NOT NULL,
    game_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_games FOREIGN KEY (game_id) REFERENCES games(id)

);