from flask import Blueprint, jsonify
from models import db, Visit

main_routes = Blueprint("main", __name__)

@main_routes.route("/visit", methods=["POST"])
def record_visit():
    new_visit = Visit()
    db.session.add(new_visit)
    db.session.commit()
    return jsonify({"message": "Visit recorded"}), 201


@main_routes.route("/count", methods=["GET"])
def get_count():
    count = Visit.query.count()
    return jsonify({"visits": count})
@main_routes.route("/")
def home():
    return "Backend Running"