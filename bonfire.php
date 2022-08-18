<?php

/**
 * Plugin Name:       Bonfire
 * Plugin URI:        #
 * Description:       The instant SPA plugin that will most likely break your site. A https://github.com/fireship-io/flamethrower wrapper.
 * Version:           0.0.1
 * Author:            Andrew Rhyand
 * Author URI:        andrewrhyand.com
 * License:           MIT License
 * License URI:       https://opensource.org/licenses/MIT
 */

define('BONFIRE__PLUGIN_URL', plugin_dir_url(__FILE__));
define('BONFIRE__PLUGIN_DIR', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', function () {
    if (is_user_logged_in()) {
        return;
    }

    $version = md5(file_get_contents(BONFIRE__PLUGIN_DIR . '/dist/mix-manifest.json'));

    wp_enqueue_script('bonfire', BONFIRE__PLUGIN_URL . '/dist/bonfire.js', [], $version, true);
});
