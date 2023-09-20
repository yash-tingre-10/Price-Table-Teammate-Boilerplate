<?php
/**
 * Plugin Name:       Team Members
 * Description:       A team members grid.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ali Alaa
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           blocks-course
 */

/**
 * Enqueues the editor styles for the block.
 */
function blocks_course_enqueue_editor_styles() {
    wp_enqueue_style(
        'blocks-course-editor-styles',  // Handle
        plugins_url( 'editor.scss', __FILE__ ),  // URL to your editor.scss
        array( 'wp-edit-blocks' ),  // Dependencies
        
    );
}
add_action( 'enqueue_block_editor_assets', 'blocks_course_enqueue_editor_styles' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function blocks_course_team_members_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'blocks_course_team_members_block_init' );
