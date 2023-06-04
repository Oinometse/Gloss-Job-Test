<?php

//Filter for uploading fonts thru Media Library

add_filter( 'upload_mimes', function( $mimes ) {
    $mimes['woff']  = 'application/x-font-woff';
    $mimes['woff2'] = 'application/x-font-woff2';
    $mimes['ttf']   = 'application/x-font-ttf';
    $mimes['svg']   = 'image/svg+xml';
    $mimes['eot']   = 'application/vnd.ms-fontobject';

    return $mimes;
} );

//Snippet Show local fonts in WP block editor

add_filter( 'generate_editor_styles', function( $editor_styles ) {
    $editor_styles[] = 'style.css';

    return $editor_styles;
} );

/*Snippet CSS*/
add_action( 'wp_enqueue_scripts', function() {
    wp_dequeue_style( 'generate-child' );
    wp_enqueue_style( 'generatepress-child', get_stylesheet_uri(), array(), filemtime( get_stylesheet_directory() . '/style.css' ), 'all' );
}, 999 );


