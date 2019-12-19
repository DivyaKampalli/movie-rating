import json

class MovieDB:
    def __init__(self, db_path):        
        with open (db_path) as db:
            self.db_path = db_path
            self.movie_data = json.load(db)
    
    def get_movie(self, id):
        my_movie = [movie for movie in self.movie_data if movie["id"] == id]        
        return my_movie[0]

    def get_movies(self):
        return self.movie_data

    def update_movie(self, movie):
        movie_to_update =  self.get_movie(movie["id"])
        movie_to_update["name"] = movie["name"]
        movie_to_update["rating"] = movie["rating"]
        with open (self.db_path, 'w') as db:
            json.dump(self.movie_data,db)