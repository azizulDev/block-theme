<?php 

function bannerBlock() {
  wp_register_script('bannerBlockScript', get_stylesheet_directory_uri() . '/build/banner.js', array('wp-blocks', 'wp-editor'));
  register_block_type("block-theme/banner", array(
    'editor_script' => 'bannerBlockScript'
  ));
}

add_action('init', 'bannerBlock');