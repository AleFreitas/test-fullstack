from __future__ import annotations

from controllers.api import api
from werkzeug.exceptions import BadRequest
from werkzeug.exceptions import HTTPException

# --------------------- CUSTOM ERRORS ---------------------


class ConflictError(HTTPException):
    code = 409
    description = "Conflict: resource already exists."


# --------------------- ERROR HANDLERS ---------------------


@api.errorhandler(BadRequest)
def handle_bad_request_error(e):
    return {"message": "Invalid request", "details": str(e)}, 400


@api.errorhandler(ValueError)
def handle_value_error(e):
    return {"message": "Invalid data provided", "details": str(e)}, 400


@api.errorhandler(ConflictError)
def handle_conflict_error(e):
    return {"message": "Conflict", "details": str(e)}, 409


@api.errorhandler(Exception)
def handle_unexpected_error(e):
    return {"message": "Internal Server Error", "details": str(e)}, 500
