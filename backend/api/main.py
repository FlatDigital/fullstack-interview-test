from flask import Blueprint
from flask import request
import json


main_blueprint = Blueprint('main', __name__)

@main_blueprint.route('/test', methods=['GET'])
def test():
    return 'Hola'