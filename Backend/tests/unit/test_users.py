from __future__ import annotations

from unittest.mock import patch

import pytest
from app.services.user_services import find_all_users
from app.services.user_services import insert_user
from app.services.user_services import update_user
from tests.mocks.user_mocks import mock_user_data
from tests.mocks.user_mocks import mock_user_list
from werkzeug.exceptions import BadRequest
from werkzeug.exceptions import Conflict


# -------------------------------------------------------------------------- #
# -------------------------- Service: find_users --------------------------- #
# -------------------------------------------------------------------------- #


@patch("app.services.user_services.get_all_users", return_value=mock_user_list)
def test_find_all_users(mock_get_all_users, app):
    """SHOULD return all users when find_all_users is called"""
    with app.app_context():
        result = find_all_users()

    expected_result = mock_user_list
    assert result == expected_result
    mock_get_all_users.assert_called_once()


# -------------------------------------------------------------------------- #
# -------------------------- Service: update_user -------------------------- #
# -------------------------------------------------------------------------- #


@patch(
    "app.services.user_services.get_user_by_id", return_value=mock_user_data
)
@patch("app.services.user_services.get_user_by_email", return_value=None)
@patch("app.services.user_services.edit_user", return_value=mock_user_data)
def test_update_user_success(
    mock_edit_user, mock_get_user_by_email, mock_get_user_by_id, app
):
    """SHOULD return user data when update_user is called"""
    with app.app_context():
        result = update_user(mock_user_data)

    assert result == mock_user_data

    mock_get_user_by_id.assert_called_once()
    mock_get_user_by_email.assert_called_once()
    mock_edit_user.assert_called_once()


@patch("app.services.user_services.get_user_by_id", return_value=None)
def test_update_user_user_not_found(mock_get_user_by_id, app):
    """SHOULD raise BadRequest when user does not exist"""
    with app.app_context():
        with pytest.raises(BadRequest, match="User does not exist"):
            update_user(mock_user_data)

    mock_get_user_by_id.assert_called_once()


@patch(
    "app.services.user_services.get_user_by_id", return_value=mock_user_data
)
@patch(
    "app.services.user_services.get_user_by_email", return_value=mock_user_data
)
def test_update_user_new_email_already_registered(
    mock_get_user_by_id, mock_get_user_by_email, app
):
    """SHOULD raise Conflict when new email is already registered"""
    with app.app_context():
        with pytest.raises(Conflict, match="User already exists"):
            invalid_mock_user_data = mock_user_data.copy()
            invalid_mock_user_data["id"] = "ARBITRARY_ID"
            update_user(invalid_mock_user_data)

    mock_get_user_by_id.assert_called_once()
    mock_get_user_by_email.assert_called_once()


# -------------------------------------------------------------------------- #
# -------------------------- Service: insert_user -------------------------- #
# -------------------------------------------------------------------------- #


@patch("app.services.user_services.get_user_by_email", return_value=None)
@patch(
    "app.services.user_services.create_new_user", return_value=mock_user_data
)
def test_insert_user_success(
    mock_create_new_user, mock_get_user_by_email, app
):
    """SHOULD return user data when insert_user is called"""
    with app.app_context():
        result = insert_user(mock_user_data)

    assert result == mock_user_data

    mock_get_user_by_email.assert_called_once()
    mock_create_new_user.assert_called_once()


@patch(
    "app.services.user_services.get_user_by_email", return_value=mock_user_data
)
def test_insert_user_new_email_already_registered(mock_get_user_by_email, app):
    """SHOULD raise Conflict when new email is already registered"""
    with app.app_context():
        with pytest.raises(Conflict, match="User already exists"):
            insert_user(mock_user_data)

    mock_get_user_by_email.assert_called_once()
