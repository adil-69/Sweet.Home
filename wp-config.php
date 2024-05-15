<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hotel' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~DJxmF,opo*%lyxE`-8D5b;~RRtmr<4F%4iG9|w08(crWSMHy3TX#yW7=H_9k A_' );
define( 'SECURE_AUTH_KEY',  'N(^uFfAxOt_cj4Ac3agiq]wz[:w [RZBX6r^.]Yp7wFYiIKqM.WTl/$W=y5wM9Bt' );
define( 'LOGGED_IN_KEY',    'nQSj)9%I>ele!1%*X(-khV2^geJ+Fg=DKj)-PpoMZ5cviAXoLTQ=e&I_h3PM{G:2' );
define( 'NONCE_KEY',        'dTJO@yWeJK:7D{{}yBZ[KgnXxa~NR1,0W[axcPLbDd*/;Y4q*hKl8ED/_EU2>(r}' );
define( 'AUTH_SALT',        's+9.I@UTG{>k8jhpDG7>)I9.*3-U[<w[]jj>zV=8^.U|C[E:?/@.`:NLePw0n!|x' );
define( 'SECURE_AUTH_SALT', 'w1m<t_c2(xrH$#BwCO.!4+}Exg{CDd ([;K@c07<{<7!e]`79rPc)Y<07,v;cv|3' );
define( 'LOGGED_IN_SALT',   'k^K<2{di!VAK8z+9`h#e~3r) /lmoi&=2p#8KpM:^2o@*pa]  uI*[;+BiH0GM#:' );
define( 'NONCE_SALT',       '={~!XsrE6*do~B9 +pkzgAx4X9]ISY/:z&B/jlhUc r[,bHZgg^EH5k-2?tA.%~T' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */
set_time_limit(300); 

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
