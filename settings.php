<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Opaque theme with the underlying Bootstrap theme.
 *
 * @package    theme
 * @subpackage opaque
 * @copyright  &copy; 2015-onwards G J Barnard in respect to modifications of the Bootstrap theme.
 * @author     G J Barnard - gjbarnard at gmail dot com and {@link http://moodle.org/user/profile.php?id=442195}
 * @author     Based on code originally written by Bas Brands, David Scotson and many other contributors.
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

// Settings.
    $settings = null;

    $readme = new moodle_url('/theme/opaque/Readme.md');
    $readme = html_writer::link($readme, 'Readme.md', array('target' => '_blank'));

    $ADMIN->add('themes', new admin_category('theme_opaque', 'Opaque'));

    //$generalsettings = new admin_settingpage('theme_opaque_general', get_string('generalsettings', 'theme_opaque'));

    // Use FontAwesome font.
    /*
    $name = 'theme_opaque/fontawesome';
    $title = get_string('fontawesome', 'theme_opaque');
    $description = get_string('fontawesome_desc', 'theme_opaque');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $generalsettings->add($setting);
    */

    //$ADMIN->add('theme_opaque', $generalsettings);
