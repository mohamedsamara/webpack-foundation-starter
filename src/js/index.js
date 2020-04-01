import 'popper.js';
import MotionUI from 'motion-ui';
import whatInput from 'what-input';

import './vendor/foundation';
import { navigation } from './navigation';

// Import application sass styles
import '../styles/sass/style.scss';

// Import foundation css
import '../styles/sass/vendors/foundation.scss';
import '../styles/sass/vendors/app.scss';

// Import vendors
import { Foundation } from './vendor/foundation-utils';

// eslint-disable-next-line no-console
console.log('Foundation', Foundation);

const app = $('.app');

MotionUI.animateIn(app, 'fade-in');

whatInput.ask(); // returns `mouse`, `keyboard` or `touch`

$(document).ready(function() {
  navigation();
});
