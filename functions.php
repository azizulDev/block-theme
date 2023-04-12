<?php 


  wp_enqueue_style( 'style', get_stylesheet_uri() );




function bannerBlock() {
  wp_register_script('bannerBlockScript', get_stylesheet_directory_uri() . '/build/banner.js', array('wp-blocks', 'wp-editor'));
  register_block_type("block-theme/banner", array(
    'editor_script' => 'bannerBlockScript'
  ));
}

add_action('init', 'bannerBlock');


function headingBlock() {
    wp_register_script('headingBlockScript', get_stylesheet_directory_uri() . '/build/heading.js', array('wp-blocks', 'wp-editor'));
    register_block_type("block-theme/heading", array(
      'editor_script' => 'headingBlockScript'
    ));
  }
  
  add_action('init', 'headingBlock');