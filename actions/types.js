// You need to import keys here that your app can interact with
// See https://laravel.com/docs/8.x/passport#the-passportclient-command
// We will set up a staging server later that will give others access to a shared online server
import { SECRET_CLIENT } from "@env";
import { ID_CLIENT } from "@env";
import { OLM_ENDPOINT } from "@env"; // http://olm.test

console.log({ OLM_ENDPOINT });

export const CLIENT_SECRET = SECRET_CLIENT;
export const URL = OLM_ENDPOINT;
export const CLIENT_ID = ID_CLIENT;

export const TOGGLE_ACTIVITY_INDICATOR = 'TOGGLE_ACTIVITY_INDICATOR';

// Auth
export const SUBMIT_START = 'SUBMIT_START';
export const SERVER_STATUS = 'SERVER_STATUS';
export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
export const LOGIN_OR_SIGNUP_RESET = 'LOGIN_OR_SIGNUP_RESET';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const EMAIL_INCORRECT = 'EMAIL_INCORRECT';
export const EMAIL_VALID = 'EMAIL_VALID';
export const PASSWORD_INCORRECT = 'PASSWORD_INCORRECT';
export const PASSWORD_VALID = 'PASSWORD_VALID';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const TOGGLE_USERNAME_MODAL = 'TOGGLE_USERNAME_MODAL';
export const USERNAME_CHANGED = 'USERNAME_CHANGED';
export const USERNAME_ERROR = 'USERNAME_ERROR';

// not using this atm
// export const FACEBOOK_LOGIN_SUCCESS = 'facebook_login_success';
// export const FACEBOOK_LOGIN_FAIL = 'facebook_login_fail';

// Photos - Gallery
export const ADD_PHOTO = 'ADD_PHOTO';
export const CLOSE_LITTER_MODAL = 'CLOSE_LITTER_MODAL';
export const CONFIRM_SESSION_ITEM = 'CONFIRM_SESSION_ITEM';
export const DELETE_SELECTED_PHOTO = 'DELETE_SELECTED_PHOTO'; // from current session
export const DELETE_SELECTED_GALLERY = 'DELETE_SELECTED_GALLERY'; // from camera roll
export const PHOTOS_FROM_GALLERY = 'PHOTOS_FROM_GALLERY';
export const REMOVE_ALL_SELECTED_PHOTOS = 'REMOVE_ALL_SELECTED_PHOTOS';
export const RESET_GALLERY_COUNT = 'RESET_GALLERY_COUNT';
export const RESET_PHOTOS_TOTAL_TO_UPLOAD = 'RESET_PHOTOS_TOTAL_TO_UPLOAD';
export const SESSION_REMOVED_FOR_DELETE = 'SESSION_REMOVED_FOR_DELETE';
export const SESSION_SELECTED_FOR_DELETE = 'SESSION_SELECTED_FOR_DELETE';
export const UPDATE_GALLERY_COUNT = 'UPDATE_GALLERY_COUNT';

export const DECREMENT_SELECTED = 'DECREMENT_SELECTED';
export const TOGGLE_IMAGES_LOADING = 'TOGGLE_IMAGES_LOADING';
export const INCREMENT_SELECTED = 'INCREMENT_SELECTED';

export const LOGOUT = 'LOGOUT';
export const RESET_SESSION_COUNT = 'RESET_SESSION_COUNT';
export const USER_FOUND = 'USER_FOUND';
export const UPLOAD_PHOTOS = 'UPLOAD_PHOTOS';
export const UPDATE_PERCENT = 'UPDATE_PERCENT';
export const UPDATE_COUNT_REMAINING = 'UPDATE_COUNT_REMAINING';
export const UPDATE_COUNT_TOTAL = 'UPDATE_COUNT_TOTAL';
export const UPLOAD_COMPLETE_SUCCESS = 'UPLOAD_COMPLETE_SUCCESS';

export const UNIQUE_VALUE = 'UNIQUE_VALUE';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_LITTER = 'TOGGLE_LITTER';
export const TOGGLE_THANK_YOU = 'TOGGLE_THANK_YOU';
export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';
export const TOGGLE_SELECTING = 'TOGGLE_SELECTING';

export const INCREMENT = 'INCREMENT';
export const ITEM_SELECTED = 'ITEM_SELECTED';

// CAMERA
export const CAMERA_GRANTED_PERMISSION = 'CAMERA_GRANTED_PERMISSION';
export const CAMERA_NOT_GRANTED_PERMISSION = 'CAMERA_NOT_GRANTED_PERMISSION';
export const SET_GPS_COORDINATES = 'SET_GPS_COORDINATES';

export const ZOOM_OUT = 'ZOOM_OUT';
export const ZOOM_IN = 'ZOOM_IN';

// gallery
// export const NEW_SELECTED = 'NEW_SELECTED';
// export const GALLERY_ITEM_SELECTED = 'GALLERY_ITEM_SELECTED';
export const CHANGE_UPLOAD_PROGRESS = 'CHANGE_UPLOAD_PROGRESS';
export const CONFIRM_GALLERY_ITEM = 'CONFIRM_GALLERY_ITEM';
export const DELETE_GALLERY_UPLOAD_SUCCESS = 'DELETE_GALLERY_UPLOAD_SUCCESS';
export const GALLERY_SELECTED_FOR_DELETE = 'GALLERY_SELECTED_FOR_DELETE';
export const GALLERY_REMOVED_FOR_DELETE = 'GALLERY_REMOVED_FOR_DELETE';
export const REMOVE_ALL_SELECTED_GALLERY = 'REMOVE_ALL_SELECTED_GALLERY';
export const RESET_GALLERY_TOTAL_TO_UPLOAD = 'RESET_GALLERY_TOTAL_TO_UPLOAD';
export const UPLOAD_TAGGED_GALLERY = 'UPLOAD_TAGGED_GALLERY';
export const TOGGLE_IMAGE_BROWSER = 'TOGGLE_IMAGE_BROWSER';
export const GALLERY_UPLOADED_SUCCESSFULLY = 'GALLERY_UPLOADED_SUCCESSFULLY';

// Litter
export const ADD_PREVIOUS_TAG = 'ADD_PREVIOUS_TAG';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const CHANGE_Q = 'CHANGE_Q';
export const CONFIRM_FOR_UPLOAD = 'CONFIRM_FOR_UPLOAD';
// export const FILTER_TAGS = 'FILTER_TAGS';
export const REMOVE_PREVIOUS_TAG = 'REMOVE_PREVIOUS_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RESET_LITTER_COLLECTION_OBJECT = 'RESET_LITTER_COLLECTION_OBJECT';
export const SAVE_PREVIOUS_TAGS = 'SAVE_PREVIOUS_TAGS';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const SESSION_UPLOADED_SUCCESSFULLY = 'SESSION_UPLOADED_SUCCESSFULLY';
export const SHOW_ALL_TAGS = 'SHOW_ALL_TAGS';
export const SHOW_INNER_MODAL = 'SHOW_INNER_MODAL';
export const SLIDE_IN_NEXT_GALLERY = 'SLIDE_IN_NEXT_GALLERY';
export const SUGGEST_TAGS = 'SUGGEST_TAGS';
export const TAG_LITTER = 'TAG_LITTER';
export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const UPDATE_PREVIOUS_TAGS = 'UPDATE_PREVIOUS_TAGS';
export const UPDATE_TAGS = 'UPDATE_TAGS';
export const UPDATE_TAGS_X_POS = 'UPDATE_TAGS_X_POS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Settings
export const CLOSE_ALL_SETTINGS_MODALS = 'CLOSE_ALL_SETTINGS_MODALS';
export const CLOSE_SECOND_SETTING_MODAL = 'CLOSE_SECOND_SETTING_MODAL';
export const SAVE_SETTING = 'SAVE_SETTING';
export const SET_MODEL = 'SET_MODEL';
export const SETTINGS_INIT = 'SETTINGS_INIT';
export const SETTINGS_UPDATE_SUCCESS = 'SETTINGS_UPDATE_SUCCESS';
export const START_UPDATING_SETTINGS = 'START_UPDATING_SETTINGS';
export const TOGGLE_SETTINGS_MODAL = 'TOGGLE_SETTINGS_MODAL';
export const TOGGLE_SETTINGS_SWITCH = 'TOGGLE_SETTINGS_SWITCH';
export const TOGGLE_SETTINGS_WAIT = 'TOGGLE_SETTINGS_WAIT';
export const TOGGLE_SECOND_SETINGS_MODAL = 'TOGGLE_SECOND_SETINGS_MODAL';
export const UPDATE_SETTINGS_PROP = 'UPDATE_SETTINGS_PROP';
export const UPDATE_USER_OBJECT = 'UPDATE_USER_OBJECT';
export const STORE_CURRENT_APP_VERSION = 'STORE_CURRENT_APP_VERSION';
export const ON_SEEN_FEATURE_TOUR = 'ON_SEEN_FEATURE_TOUR';

// Web data
export const WEB_IMAGES = 'WEB_IMAGES';
export const WEB_CONFIRM = 'WEB_CONFIRM';
