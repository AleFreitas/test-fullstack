# tests/unit/test_users.py
from __future__ import annotations

from unittest.mock import MagicMock, patch
import pytest
from werkzeug.exceptions import BadRequest, Conflict

from app.services.user_services import find_all_users, update_user, insert_user
from tests.mocks.user_mocks import mock_user_list, mock_user_data

from conftest import mock_session


# ---------------------------------------------------------------------------- #
# --------------------------- Service: find_users ---------------------------- #
# ---------------------------------------------------------------------------- #

# WHEN find_all_users SHOULD return all users
@patch("app.services.user_services.get_all_users", return_value=mock_user_list)
def test_find_all_users(mock_get_all_users, app):
    with app.app_context():
        result = find_all_users()

    expected_result = mock_user_list
    assert result == expected_result
    mock_get_all_users.assert_called_once()


# ---------------------------------------------------------------------------- #
# --------------------------- Service: update_user --------------------------- #
# ---------------------------------------------------------------------------- #

# WHEN update_user AND user exists AND new email is not used SHOULD return user data
@patch('app.services.user_services.get_user_by_id', return_value=mock_user_data)
@patch('app.services.user_services.get_user_by_email', return_value=None)
@patch('app.services.user_services.edit_user', return_value=mock_user_data)
def test_update_user_success(mock_edit_user, mock_get_user_by_email, mock_get_user_by_id, app):
    with app.app_context():
        result = update_user(mock_user_data)
    
    assert result == mock_user_data

    mock_get_user_by_id.assert_called_once()
    mock_get_user_by_email.assert_called_once()
    mock_edit_user.assert_called_once()

# WHEN update_user BUT user does not exist SHOULD raise BadRequest
@patch('app.services.user_services.get_user_by_id', return_value=None)
def test_update_user_user_not_found(mock_get_user_by_id, app):
    with app.app_context():
        with pytest.raises(BadRequest, match="User does not exist"):
            update_user(mock_user_data)
    
    mock_get_user_by_id.assert_called_once()

# WHEN update_user BUT new email is already registered SHOULD raise Conflict
@patch('app.services.user_services.get_user_by_id', return_value=mock_user_data)
@patch('app.services.user_services.get_user_by_email', return_value=mock_user_data)
def test_update_user_new_email_already_registered(mock_get_user_by_id, mock_get_user_by_email, app):
    with app.app_context():
        with pytest.raises(Conflict, match="User already exists"):
            invalid_mock_user_data = mock_user_data.copy()
            invalid_mock_user_data["id"] = "ARBITRARY_ID"
            update_user(invalid_mock_user_data)
    
    mock_get_user_by_id.assert_called_once()
    mock_get_user_by_email.assert_called_once()

# ---------------------------------------------------------------------------- #
# --------------------------- Service: insert_user --------------------------- #
# ---------------------------------------------------------------------------- #

# WHEN insert_user AND user exists AND new email is not used SHOULD return user data
@patch('app.services.user_services.get_user_by_email', return_value=None)
@patch('app.services.user_services.create_new_user', return_value=mock_user_data)
def test_insert_user_success(mock_create_new_user, mock_get_user_by_email, app):
    with app.app_context():
        result = insert_user(mock_user_data)
    
    assert result == mock_user_data

    mock_get_user_by_email.assert_called_once()
    mock_create_new_user.assert_called_once()

# WHEN insert_user BUT new email is already registered SHOULD raise Conflict
@patch('app.services.user_services.get_user_by_email', return_value=mock_user_data)
def test_insert_user_new_email_already_registered(mock_get_user_by_email, app):
    with app.app_context():
        with pytest.raises(Conflict, match="User already exists"):
            insert_user(mock_user_data)
    
    mock_get_user_by_email.assert_called_once()