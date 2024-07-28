from flask import Blueprint, render_template
from .models import Herb

main = Blueprint('main', __name__)

@main.route('/')
def index():
    herbs = Herb.query.all()
    return render_template('index.html', herbs=herbs)

