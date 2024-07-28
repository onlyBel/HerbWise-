from flask_cors import CORS

app = Flask(__name__)
CORS(app)


herbs = [
    {'id': 1, 'name': 'Basil', 'culinary_uses': 'Pesto, sauces', 'health_benefits': 'Anti-inflammatory', 'growing_conditions': 'Full sun, well-drained soil'},
    {'id': 2, 'name': 'Rosemary', 'culinary_uses': 'Roasts, stews', 'health_benefits': 'Improves digestion', 'growing_conditions': 'Full sun, well-drained soil'},
    # Add more herbs here
]

@app.route('/api/herbs', methods=['GET'])
def get_herbs():
    return jsonify(herbs)

if __name__ == '__main__':
    app.run(debug=True)

