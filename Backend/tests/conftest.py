from __future__ import annotations

from unittest.mock import MagicMock

import pytest
from app.main import create_app


@pytest.fixture
def app():
    app = create_app()
    app.config["TESTING"] = True
    yield app


@pytest.fixture
def client(app):
    return app.test_client()


mock_session = MagicMock()
