from __future__ import annotations

import pytest
from app.main import create_app

from unittest.mock import MagicMock
from flask_sqlalchemy import SQLAlchemy

@pytest.fixture
def app():
    app = create_app()
    app.config["TESTING"] = True
    yield app


@pytest.fixture
def client(app):
    return app.test_client()

mock_session = MagicMock()
