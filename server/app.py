from flask import Flask, request, escape, jsonify
from moviedb import MovieDB

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    movies = MovieDB("./moviedb.json")
    return jsonify(movies.get_movies())
    

@app.route('/movie/<int:movie_id>', methods=['GET'])
def update_movie(movie_id):
    moviedb = MovieDB("./moviedb.json")
    movie = moviedb.get_movie(movie_id)
    rating = request.args.get("rating")
    if(rating):
        movie["rating"] = float(rating)
        moviedb.update_movie(movie)       
    
    return jsonify(movie)
        
        
    
    

