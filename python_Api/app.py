from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/api/data', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'GET':
        data = {'key': 'value'}
        return jsonify(data)
    elif request.method == 'POST':
        content = request.json
        return jsonify(content)

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(debug=True, port=5001)