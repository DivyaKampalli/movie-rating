from flask import Flask, request, jsonify, render_template
from moviedb import MovieDB

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    moviedb = MovieDB("./moviedb.json")    
    return render_template('movies.html', movies = moviedb.get_movies())
    

@app.route('/movie/<int:movie_id>', methods=['GET'])
def update_movie(movie_id):
    moviedb = MovieDB("./moviedb.json")
    movie = moviedb.get_movie(movie_id)
    rating = request.args.get("rating")
    if(rating):
        movie["rating"] = float(rating)
        moviedb.update_movie(movie)       
    
    return jsonify(movie)
        
        
    
    

